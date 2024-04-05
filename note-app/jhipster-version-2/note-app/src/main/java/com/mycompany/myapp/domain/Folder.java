package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Folder.
 */
@Entity
@Table(name = "folder")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@org.springframework.data.elasticsearch.annotations.Document(indexName = "folder")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Folder implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "subFolder")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @org.springframework.data.annotation.Transient
    @JsonIgnoreProperties(value = { "folders", "user", "subFolder" }, allowSetters = true)
    private Set<Folder> folders = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "folders", "user", "subFolder" }, allowSetters = true)
    private Folder subFolder;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Folder id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Folder name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Folder> getFolders() {
        return this.folders;
    }

    public void setFolders(Set<Folder> folders) {
        if (this.folders != null) {
            this.folders.forEach(i -> i.setSubFolder(null));
        }
        if (folders != null) {
            folders.forEach(i -> i.setSubFolder(this));
        }
        this.folders = folders;
    }

    public Folder folders(Set<Folder> folders) {
        this.setFolders(folders);
        return this;
    }

    public Folder addFolder(Folder folder) {
        this.folders.add(folder);
        folder.setSubFolder(this);
        return this;
    }

    public Folder removeFolder(Folder folder) {
        this.folders.remove(folder);
        folder.setSubFolder(null);
        return this;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Folder user(User user) {
        this.setUser(user);
        return this;
    }

    public Folder getSubFolder() {
        return this.subFolder;
    }

    public void setSubFolder(Folder folder) {
        this.subFolder = folder;
    }

    public Folder subFolder(Folder folder) {
        this.setSubFolder(folder);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Folder)) {
            return false;
        }
        return getId() != null && getId().equals(((Folder) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Folder{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
