package com.example.todoapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.todoapp.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  @Query(value = "SELECT 'tuan' as username, '123' as password", nativeQuery = true)
  Optional<User> findByUsername(String username);
}
