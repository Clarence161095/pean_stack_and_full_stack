package com.example.todoapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todoapp.models.Task;

@Service("TaskServiceMock")
public class TaskServiceMock implements TaskService {

  @Override
  public List<Task> getAllTasks() {
    // Create an Mock List of Tasks
    Task task1 = new Task("Task 1");
    Task task2 = new Task("Task 2");
    task1.setCompleted(true);
    return List.of(task1, task2);
  }

  @Override
  public Task getTaskById(Long id) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getTaskById'");
  }

  @Override
  public Task createTask(Task task) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'createTask'");
  }

  @Override
  public Task updateTask(Task task) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateTask'");
  }

  @Override
  public void deleteTask(Long id) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'deleteTask'");
  }

  @Override
  public List<Task> searchTasks(String keyword) {
    // Create an Mock List of Tasks
    Task task1 = new Task("Task 1");
    Task task2 = new Task("Task 3");
    task1.setCompleted(true);
    return List.of(task1, task2);
  }
}
