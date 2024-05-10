package main.java.com.views;

import java.util.Scanner;

public interface DashboardView {
  public void showMenu();

  public boolean continueApp();

  public Scanner getInputScanner();

  public int getChoice(Scanner scanner);
}
