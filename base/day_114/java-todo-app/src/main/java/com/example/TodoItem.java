package main.java.com.example;

public class TodoItem {
  private String title;
  private String completed;

  public TodoItem(String title, String completed) {
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
