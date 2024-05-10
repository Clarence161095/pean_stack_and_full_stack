package main.java.com.models;

public class TodoItemModel {
  String title;
  String completed;

  public TodoItemModel(String title, String completed) {
    this.title = title;
    this.completed = completed;
  }

  public String getTitle() {
    return title;
  }

  public String getCompleted() {
    return completed;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setCompleted(String completed) {
    this.completed = completed;
  }
}
