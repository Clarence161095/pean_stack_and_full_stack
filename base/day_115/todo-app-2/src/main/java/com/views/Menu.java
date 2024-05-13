package main.java.com.views;

import java.util.Scanner;

public class Menu implements SettingJapan, SettingEuro, DashboardView {

  @Override
  public void settingInfo() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'settingInfo'");
  }

  @Override
  public void exitApp() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'exitApp'");
  }

  @Override
  public void confirmCookie() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'confirmCookie'");
  }

  @Override
  public void muteSound() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'muteSound'");
  }

  @Override
  public void showMenu() {
    System.out.println("--------------------");
    System.out.println("1. Add item");
    System.out.println("2. Remove item");
    System.out.println("3. Update item");
    System.out.println("4. List items");
    System.out.println("5. Exit");
    System.out.print("Enter your choice: ");
  }

  @Override
  public boolean continueApp() {
    return true;
  }

  @Override
  public Scanner getInputScanner() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getInputScanner'");
  }

  @Override
  public int getChoice(Scanner scanner) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getChoice'");
  }

}
