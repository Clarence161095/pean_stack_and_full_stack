package main.java.com.app;

import main.java.com.controllers.DashboardController;

public class AppContext {
  private static DashboardController dashboardController;

  public static DashboardController getDashboardController() {
    if (dashboardController == null) {
      dashboardController = new DashboardController();
    }
    return dashboardController;
  }
}
