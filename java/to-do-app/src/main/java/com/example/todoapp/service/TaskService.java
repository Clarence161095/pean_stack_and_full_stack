package com.example.todoapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todoapp.models.Task;

@Service
public interface TaskService {
    public List<Task> getAllTasks();

    public Task getTaskById(Long id);

    public Task createTask(Task task);

    public Task updateTask(Task task);

    public void deleteTask(Long id);

    public List<Task> searchTasks(String keyword);
}
