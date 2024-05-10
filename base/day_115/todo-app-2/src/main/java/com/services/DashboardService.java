package main.java.com.services;

import java.util.Scanner;

import main.java.com.models.TodoListModel;

public interface DashboardService {
  public void process(int choice, TodoListModel todoList, Scanner scanner);
}
