package main.java.com.example;

import java.util.Scanner;

public class Dashboard {
  public void runApp() {
    TodoList todoList = new TodoList();
    Menu menu = new Menu();
    try (Scanner scanner = new Scanner(System.in)) {
      while (true) {
        menu.showMenu();
        if (!scanner.hasNextInt()) {
          System.out.println("Invalid input. Please enter an integer.");
          scanner.next(); // discard the invalid input
          continue;
        }
        int choice = scanner.nextInt();
        CoreLogic coreLogic = new CoreLogic();
        coreLogic.process(choice, todoList, scanner);
      }
    }
  }
}
