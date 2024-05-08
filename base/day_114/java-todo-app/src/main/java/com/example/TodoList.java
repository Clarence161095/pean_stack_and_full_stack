package main.java.com.example;

import java.util.ArrayList;
import java.util.List;

public class TodoList {
  private List<TodoItem> items = new ArrayList<>();

  public void addItem(TodoItem item) {
    items.add(item);
  }

  public void removeItem(int index) {
    items.remove(index);
  }

  public void updateItem(int index, TodoItem item) {
    items.set(index, item);
  }

  public List<TodoItem> getItems() {
    return items;
  }
}
