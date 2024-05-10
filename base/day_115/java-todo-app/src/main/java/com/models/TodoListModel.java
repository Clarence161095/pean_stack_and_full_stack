package main.java.com.models;

import java.util.ArrayList;
import java.util.List;

public class TodoListModel {
  private List<TodoItemModel> items = new ArrayList<>();

  public void addItem(TodoItemModel item) {
    items.add(item);
  }

  public void removeItem(int index) {
    items.remove(index);
  }

  public void updateItem(int index, TodoItemModel item) {
    items.set(index, item);
  }

  public List<TodoItemModel> getItems() {
    return items;
  }
}
