package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Folder;
import com.mycompany.myapp.repository.FolderRepository;
import com.mycompany.myapp.repository.search.FolderSearchRepository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.errors.ElasticsearchExceptionMapper;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.Folder}.
 */
@RestController
@RequestMapping("/api/folders")
@Transactional
public class FolderResource {

    private final Logger log = LoggerFactory.getLogger(FolderResource.class);

    private static final String ENTITY_NAME = "folder";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FolderRepository folderRepository;

    private final FolderSearchRepository folderSearchRepository;

    public FolderResource(FolderRepository folderRepository, FolderSearchRepository folderSearchRepository) {
        this.folderRepository = folderRepository;
        this.folderSearchRepository = folderSearchRepository;
    }

    /**
     * {@code POST  /folders} : Create a new folder.
     *
     * @param folder the folder to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new folder, or with status {@code 400 (Bad Request)} if the folder has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Folder> createFolder(@Valid @RequestBody Folder folder) throws URISyntaxException {
        log.debug("REST request to save Folder : {}", folder);
        if (folder.getId() != null) {
            throw new BadRequestAlertException("A new folder cannot already have an ID", ENTITY_NAME, "idexists");
        }
        folder = folderRepository.save(folder);
        folderSearchRepository.index(folder);
        return ResponseEntity.created(new URI("/api/folders/" + folder.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, folder.getId().toString()))
            .body(folder);
    }

    /**
     * {@code PUT  /folders/:id} : Updates an existing folder.
     *
     * @param id the id of the folder to save.
     * @param folder the folder to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated folder,
     * or with status {@code 400 (Bad Request)} if the folder is not valid,
     * or with status {@code 500 (Internal Server Error)} if the folder couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Folder> updateFolder(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody Folder folder
    ) throws URISyntaxException {
        log.debug("REST request to update Folder : {}, {}", id, folder);
        if (folder.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, folder.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!folderRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        folder = folderRepository.save(folder);
        folderSearchRepository.index(folder);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, folder.getId().toString()))
            .body(folder);
    }

    /**
     * {@code PATCH  /folders/:id} : Partial updates given fields of an existing folder, field will ignore if it is null
     *
     * @param id the id of the folder to save.
     * @param folder the folder to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated folder,
     * or with status {@code 400 (Bad Request)} if the folder is not valid,
     * or with status {@code 404 (Not Found)} if the folder is not found,
     * or with status {@code 500 (Internal Server Error)} if the folder couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Folder> partialUpdateFolder(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody Folder folder
    ) throws URISyntaxException {
        log.debug("REST request to partial update Folder partially : {}, {}", id, folder);
        if (folder.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, folder.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!folderRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Folder> result = folderRepository
            .findById(folder.getId())
            .map(existingFolder -> {
                if (folder.getName() != null) {
                    existingFolder.setName(folder.getName());
                }

                return existingFolder;
            })
            .map(folderRepository::save)
            .map(savedFolder -> {
                folderSearchRepository.index(savedFolder);
                return savedFolder;
            });

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, folder.getId().toString())
        );
    }

    /**
     * {@code GET  /folders} : get all the folders.
     *
     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of folders in body.
     */
    @GetMapping("")
    public ResponseEntity<List<Folder>> getAllFolders(
        @org.springdoc.core.annotations.ParameterObject Pageable pageable,
        @RequestParam(name = "eagerload", required = false, defaultValue = "true") boolean eagerload
    ) {
        log.debug("REST request to get a page of Folders");
        Page<Folder> page;
        if (eagerload) {
            page = folderRepository.findAllWithEagerRelationships(pageable);
        } else {
            page = folderRepository.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /folders/:id} : get the "id" folder.
     *
     * @param id the id of the folder to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the folder, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Folder> getFolder(@PathVariable("id") Long id) {
        log.debug("REST request to get Folder : {}", id);
        Optional<Folder> folder = folderRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(folder);
    }

    /**
     * {@code DELETE  /folders/:id} : delete the "id" folder.
     *
     * @param id the id of the folder to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFolder(@PathVariable("id") Long id) {
        log.debug("REST request to delete Folder : {}", id);
        folderRepository.deleteById(id);
        folderSearchRepository.deleteFromIndexById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }

    /**
     * {@code SEARCH  /folders/_search?query=:query} : search for the folder corresponding
     * to the query.
     *
     * @param query the query of the folder search.
     * @param pageable the pagination information.
     * @return the result of the search.
     */
    @GetMapping("/_search")
    public ResponseEntity<List<Folder>> searchFolders(
        @RequestParam("query") String query,
        @org.springdoc.core.annotations.ParameterObject Pageable pageable
    ) {
        log.debug("REST request to search for a page of Folders for query {}", query);
        try {
            Page<Folder> page = folderSearchRepository.search(query, pageable);
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
            return ResponseEntity.ok().headers(headers).body(page.getContent());
        } catch (RuntimeException e) {
            throw ElasticsearchExceptionMapper.mapException(e);
        }
    }
}
