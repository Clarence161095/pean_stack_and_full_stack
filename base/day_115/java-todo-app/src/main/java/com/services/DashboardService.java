package main.java.com.services;

import java.util.List;
import java.util.Scanner;

import main.java.com.models.TodoItemModel;
import main.java.com.models.TodoListModel;

public class DashboardService {
  public void process(int choice, TodoListModel todoList, Scanner scanner) {
    switch (choice) {
      case 1:
        System.out.print("Enter title: ");
        String title = scanner.next();
        System.out.print("Enter completed: ");
        String completed = scanner.next();
        TodoItemModel item = new TodoItemModel(title, completed);
        todoList.addItem(item);
        System.out.println("Item added successfully: {title: " + title + ", completed: " + completed + "}");
        break;
      case 2:
        System.out.print("Enter index: ");
        int index = scanner.nextInt();
        todoList.removeItem(index);
        System.out.println("Item removed successfully at index " + index);
        break;
      case 3:
        System.out.print("Enter index: ");
        int indexToUpdate = scanner.nextInt();
        System.out.print("Enter title: ");
        String titleToUpdate = scanner.next();
        System.out.print("Enter completed: ");
        String completedToUpdate = scanner.next();

        TodoItemModel itemToUpdate = new TodoItemModel(titleToUpdate, completedToUpdate);

        todoList.updateItem(indexToUpdate, itemToUpdate);
        System.out.println(
            "Item updated successfully: {title: " + titleToUpdate + ", completed: " + completedToUpdate + "}");
        break;
      case 4:
        List<TodoItemModel> items = todoList.getItems();
        System.out.println("This is your todo list:");
        for (int i = 0; i < items.size(); i++) {
          TodoItemModel currentItem = items.get(i);
          System.out
              .println(i + 1 + ". Title: " + currentItem.getTitle() + ", Completed: " + currentItem.getCompleted());
        }
        break;
      case 5:
        System.exit(0);
        break;
      default:
        System.out.println("Invalid choice");
    }
  }
}
