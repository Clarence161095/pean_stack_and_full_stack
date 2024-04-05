package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.FolderTestSamples.*;
import static com.mycompany.myapp.domain.FolderTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class FolderTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Folder.class);
        Folder folder1 = getFolderSample1();
        Folder folder2 = new Folder();
        assertThat(folder1).isNotEqualTo(folder2);

        folder2.setId(folder1.getId());
        assertThat(folder1).isEqualTo(folder2);

        folder2 = getFolderSample2();
        assertThat(folder1).isNotEqualTo(folder2);
    }

    @Test
    void folderTest() throws Exception {
        Folder folder = getFolderRandomSampleGenerator();
        Folder folderBack = getFolderRandomSampleGenerator();

        folder.addFolder(folderBack);
        assertThat(folder.getFolders()).containsOnly(folderBack);
        assertThat(folderBack.getSubFolder()).isEqualTo(folder);

        folder.removeFolder(folderBack);
        assertThat(folder.getFolders()).doesNotContain(folderBack);
        assertThat(folderBack.getSubFolder()).isNull();

        folder.folders(new HashSet<>(Set.of(folderBack)));
        assertThat(folder.getFolders()).containsOnly(folderBack);
        assertThat(folderBack.getSubFolder()).isEqualTo(folder);

        folder.setFolders(new HashSet<>());
        assertThat(folder.getFolders()).doesNotContain(folderBack);
        assertThat(folderBack.getSubFolder()).isNull();
    }

    @Test
    void subFolderTest() throws Exception {
        Folder folder = getFolderRandomSampleGenerator();
        Folder folderBack = getFolderRandomSampleGenerator();

        folder.setSubFolder(folderBack);
        assertThat(folder.getSubFolder()).isEqualTo(folderBack);

        folder.subFolder(null);
        assertThat(folder.getSubFolder()).isNull();
    }
}
