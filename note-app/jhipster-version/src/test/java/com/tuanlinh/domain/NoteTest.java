package com.tuanlinh.domain;

import static com.tuanlinh.domain.FolderTestSamples.*;
import static com.tuanlinh.domain.NoteTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.tuanlinh.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class NoteTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Note.class);
        Note note1 = getNoteSample1();
        Note note2 = new Note();
        assertThat(note1).isNotEqualTo(note2);

        note2.setId(note1.getId());
        assertThat(note1).isEqualTo(note2);

        note2 = getNoteSample2();
        assertThat(note1).isNotEqualTo(note2);
    }

    @Test
    void folderTest() throws Exception {
        Note note = getNoteRandomSampleGenerator();
        Folder folderBack = getFolderRandomSampleGenerator();

        note.setFolder(folderBack);
        assertThat(note.getFolder()).isEqualTo(folderBack);

        note.folder(null);
        assertThat(note.getFolder()).isNull();
    }
}
