package uni.pu.webforum.models;

import uni.pu.webforum.LoginService;

public class RegisterPageModel {
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

    public void navigateToRegisterPage() {
        System.out.println("Навигиране до страницата за регистрация в системата");
    }

    public void clickRegisterButton() {
        message = LoginService.register(username, password);
    }
}
