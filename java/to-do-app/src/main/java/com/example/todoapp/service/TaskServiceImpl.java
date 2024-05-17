package com.example.todoapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.todoapp.models.Task;
import com.example.todoapp.repository.TaskRepository;

@Service("TaskServiceImpl")
@Primary
public class TaskServiceImpl implements TaskService {
  @Autowired
  private TaskRepository taskRepository;

  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  public Task getTaskById(Long id) {
    return preGetTaskById2(id);
  }

  private TaskRepository preGetTaskById1(Long id) {
    // Do some things 1 before getting the task
    return taskRepository;
  }

  private Task preGetTaskById2(Long id) {
    // Do some things 2 before getting the task
    return preGetTaskById1(id).findById(id).orElse(null);
  }

  public Task createTask(Task task) {
    return taskRepository.save(task);
  }

  public Task updateTask(Task task) {
    return taskRepository.save(task);
  }

  public void deleteTask(Long id) {
    taskRepository.deleteById(id);
  }

  public List<Task> searchTasks(String keyword) {
    return taskRepository.search(keyword);
  }
}
