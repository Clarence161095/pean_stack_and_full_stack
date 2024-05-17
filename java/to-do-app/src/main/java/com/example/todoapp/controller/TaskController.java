package com.example.todoapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.todoapp.models.Task;
import com.example.todoapp.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    @Qualifier("TaskServiceImpl")
    private TaskService TaskServiceImpl;

    @Autowired
    @Qualifier("TaskServiceMock")
    private TaskService taskServiceMock;

    private TaskService getTaskService() {
        boolean isMock = false;
        return isMock ? taskServiceMock : TaskServiceImpl;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return getTaskService().getAllTasks();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return getTaskService().getTaskById(id);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return getTaskService().createTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        task.setId(id);
        return getTaskService().updateTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        getTaskService().deleteTask(id);
    }

    @GetMapping("/search")
    public List<Task> searchTasks(@RequestParam String keyword) {
        return getTaskService().searchTasks(keyword);
    }
}
