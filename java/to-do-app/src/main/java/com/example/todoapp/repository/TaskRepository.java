package com.example.todoapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.todoapp.models.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
  @Query(value = "SELECT * FROM task WHERE title LIKE %:keyword%", nativeQuery = true)
  List<Task> search(@Param("keyword") String keyword);
}
