package main.java.com.app;

import main.java.com.controllers.DashboardController;
import main.java.com.controllers.DashboardControllerImplement;

public class Main {
  public static void main(String[] args) {
    DashboardController dashboardController = new DashboardControllerImplement();
    dashboardController.runApp();
  }
}
