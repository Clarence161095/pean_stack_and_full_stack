package main.java.com.controllers;

import java.util.Scanner;

import main.java.com.models.TodoListModel;
import main.java.com.services.DashboardService;
import main.java.com.services.DashboardServiceImpl;
import main.java.com.views.DashboardView;
import main.java.com.views.DashboardViewImpl;

public class DashboardControllerImplement implements DashboardController {

  @Override
  public void runApp() {
    TodoListModel todoList = new TodoListModel();
    DashboardView menu = new DashboardViewImpl();

    while (menu.continueApp()) {
      menu.showMenu();
      Scanner scanner = menu.getInputScanner();
      int choice = menu.getChoice(scanner);
      DashboardService dashboardService = new DashboardServiceImpl();
      dashboardService.process(choice, todoList, scanner);
    }
  }
}
