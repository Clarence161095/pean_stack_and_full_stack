package main.java.com.controllers;

import java.util.Scanner;

import main.java.com.models.TodoListModel;
import main.java.com.services.DashboardService;
import main.java.com.services.DashboardServiceImpl;
import main.java.com.services.FormLogin;
import main.java.com.services.LoginServiceImpl;
import main.java.com.services.SSOLogin;
import main.java.com.views.DashboardView;
import main.java.com.views.Menu;
import main.java.com.views.SettingJapan;

public class DashboardControllerImplement implements DashboardController {

  @Override
  public void runApp() {
    TodoListModel todoList = new TodoListModel();
    DashboardView dashboard = new Menu();
    SettingJapan settingJapan = new Menu();
    FormLogin formLogin = new LoginServiceImpl();
    SSOLogin ssoLogin = new LoginServiceImpl();

    while (dashboard.continueApp()) {
      dashboard.showMenu();
      Scanner scanner = dashboard.getInputScanner();
      int choice = dashboard.getChoice(scanner);
      DashboardService dashboardService = new DashboardServiceImpl();
      dashboardService.process(choice, todoList, scanner);
    }
  }
}
