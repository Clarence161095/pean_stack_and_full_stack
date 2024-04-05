package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Folder;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Folder entity.
 */
@Repository
public interface FolderRepository extends JpaRepository<Folder, Long> {
    @Query("select folder from Folder folder where folder.user.login = ?#{authentication.name}")
    List<Folder> findByUserIsCurrentUser();

    default Optional<Folder> findOneWithEagerRelationships(Long id) {
        return this.findOneWithToOneRelationships(id);
    }

    default List<Folder> findAllWithEagerRelationships() {
        return this.findAllWithToOneRelationships();
    }

    default Page<Folder> findAllWithEagerRelationships(Pageable pageable) {
        return this.findAllWithToOneRelationships(pageable);
    }

    @Query(value = "select folder from Folder folder left join fetch folder.user", countQuery = "select count(folder) from Folder folder")
    Page<Folder> findAllWithToOneRelationships(Pageable pageable);

    @Query("select folder from Folder folder left join fetch folder.user")
    List<Folder> findAllWithToOneRelationships();

    @Query("select folder from Folder folder left join fetch folder.user where folder.id =:id")
    Optional<Folder> findOneWithToOneRelationships(@Param("id") Long id);
}
