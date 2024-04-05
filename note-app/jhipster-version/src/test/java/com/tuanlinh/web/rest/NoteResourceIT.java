package com.tuanlinh.web.rest;

import static com.tuanlinh.domain.NoteAsserts.*;
import static com.tuanlinh.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuanlinh.IntegrationTest;
import com.tuanlinh.domain.Note;
import com.tuanlinh.repository.NoteRepository;
import jakarta.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link NoteResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class NoteResourceIT {

    private static final String DEFAULT_TITLE = "AAAAAAAAAA";
    private static final String UPDATED_TITLE = "BBBBBBBBBB";

    private static final String DEFAULT_CONTENT = "AAAAAAAAAA";
    private static final String UPDATED_CONTENT = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/notes";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private NoteRepository noteRepository;

    @Mock
    private NoteRepository noteRepositoryMock;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restNoteMockMvc;

    private Note note;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Note createEntity(EntityManager em) {
        Note note = new Note().title(DEFAULT_TITLE).content(DEFAULT_CONTENT);
        return note;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Note createUpdatedEntity(EntityManager em) {
        Note note = new Note().title(UPDATED_TITLE).content(UPDATED_CONTENT);
        return note;
    }

    @BeforeEach
    public void initTest() {
        note = createEntity(em);
    }

    @Test
    @Transactional
    void createNote() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Note
        var returnedNote = om.readValue(
            restNoteMockMvc
                .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(note)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            Note.class
        );

        // Validate the Note in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertNoteUpdatableFieldsEquals(returnedNote, getPersistedNote(returnedNote));
    }

    @Test
    @Transactional
    void createNoteWithExistingId() throws Exception {
        // Create the Note with an existing ID
        note.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restNoteMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(note)))
            .andExpect(status().isBadRequest());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkTitleIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        note.setTitle(null);

        // Create the Note, which fails.

        restNoteMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(note)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllNotes() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        // Get all the noteList
        restNoteMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(note.getId().intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE)))
            .andExpect(jsonPath("$.[*].content").value(hasItem(DEFAULT_CONTENT.toString())));
    }

    @SuppressWarnings({ "unchecked" })
    void getAllNotesWithEagerRelationshipsIsEnabled() throws Exception {
        when(noteRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restNoteMockMvc.perform(get(ENTITY_API_URL + "?eagerload=true")).andExpect(status().isOk());

        verify(noteRepositoryMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({ "unchecked" })
    void getAllNotesWithEagerRelationshipsIsNotEnabled() throws Exception {
        when(noteRepositoryMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restNoteMockMvc.perform(get(ENTITY_API_URL + "?eagerload=false")).andExpect(status().isOk());
        verify(noteRepositoryMock, times(1)).findAll(any(Pageable.class));
    }

    @Test
    @Transactional
    void getNote() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        // Get the note
        restNoteMockMvc
            .perform(get(ENTITY_API_URL_ID, note.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(note.getId().intValue()))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE))
            .andExpect(jsonPath("$.content").value(DEFAULT_CONTENT.toString()));
    }

    @Test
    @Transactional
    void getNonExistingNote() throws Exception {
        // Get the note
        restNoteMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingNote() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the note
        Note updatedNote = noteRepository.findById(note.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedNote are not directly saved in db
        em.detach(updatedNote);
        updatedNote.title(UPDATED_TITLE).content(UPDATED_CONTENT);

        restNoteMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedNote.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedNote))
            )
            .andExpect(status().isOk());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedNoteToMatchAllProperties(updatedNote);
    }

    @Test
    @Transactional
    void putNonExistingNote() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        note.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restNoteMockMvc
            .perform(put(ENTITY_API_URL_ID, note.getId()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(note)))
            .andExpect(status().isBadRequest());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchNote() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        note.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restNoteMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(note))
            )
            .andExpect(status().isBadRequest());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamNote() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        note.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restNoteMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(note)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateNoteWithPatch() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the note using partial update
        Note partialUpdatedNote = new Note();
        partialUpdatedNote.setId(note.getId());

        restNoteMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedNote.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedNote))
            )
            .andExpect(status().isOk());

        // Validate the Note in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertNoteUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedNote, note), getPersistedNote(note));
    }

    @Test
    @Transactional
    void fullUpdateNoteWithPatch() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the note using partial update
        Note partialUpdatedNote = new Note();
        partialUpdatedNote.setId(note.getId());

        partialUpdatedNote.title(UPDATED_TITLE).content(UPDATED_CONTENT);

        restNoteMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedNote.getId())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedNote))
            )
            .andExpect(status().isOk());

        // Validate the Note in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertNoteUpdatableFieldsEquals(partialUpdatedNote, getPersistedNote(partialUpdatedNote));
    }

    @Test
    @Transactional
    void patchNonExistingNote() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        note.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restNoteMockMvc
            .perform(patch(ENTITY_API_URL_ID, note.getId()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(note)))
            .andExpect(status().isBadRequest());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchNote() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        note.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restNoteMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(note))
            )
            .andExpect(status().isBadRequest());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamNote() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        note.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restNoteMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(om.writeValueAsBytes(note)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Note in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteNote() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the note
        restNoteMockMvc
            .perform(delete(ENTITY_API_URL_ID, note.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return noteRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected Note getPersistedNote(Note note) {
        return noteRepository.findById(note.getId()).orElseThrow();
    }

    protected void assertPersistedNoteToMatchAllProperties(Note expectedNote) {
        assertNoteAllPropertiesEquals(expectedNote, getPersistedNote(expectedNote));
    }

    protected void assertPersistedNoteToMatchUpdatableProperties(Note expectedNote) {
        assertNoteAllUpdatablePropertiesEquals(expectedNote, getPersistedNote(expectedNote));
    }
}
