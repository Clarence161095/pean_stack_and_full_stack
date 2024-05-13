package main.java.com.services;

public interface FormLogin {
  public void login(String username, String password);
  public void register(String username, String password);
  public void logout();
}
