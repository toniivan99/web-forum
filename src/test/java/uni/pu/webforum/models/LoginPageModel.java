package uni.pu.webforum.models;

import uni.pu.webforum.LoginService;

public class LoginPageModel {
    private String username;
    private String password;
    private String message;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void navigateToLoginPage() {
        System.out.println("Навигиране до страницата за вход в системата");
    }

    public void clickLoginButton() {
        message = LoginService.login(username, password);
    }

}
