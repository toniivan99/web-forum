package uni.pu.webforum;

import java.util.HashSet;
import java.util.Set;

public class LoginService {
    private static Set<User> users = new HashSet<>();

    public static Set<User> getUsers() {
        if (users.isEmpty()) {
            User user = new User();
            user.setUsername("Ivan");
            user.setPassword("123");
            user.setRole("User");
            users.add(user);
            User user2 = new User();
            user2.setUsername("Gosho");
            user2.setPassword("123");
            user2.setRole("User");
            users.add(user2);
        }
        return users;
    }

    public static String register(String username, String password) {
        if (username == null || username.isEmpty()) {
            return "Моля въведете потребителско име";
        } else if (password == null || password.isEmpty()) {
            return "Моля въведете парола";
        }
        boolean foundUser = getUsers().stream().anyMatch(u -> u.getUsername().equals(username));
        if (foundUser) {
            return "Потребителското име е заето";
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        users.add(user);
        return "Регистрацията е успешна";
    }

    public static String login(String username, String password) {
        if (username == null || username.isEmpty()) {
            return "Моля въведете потребителско име";
        } else if (password == null || password.isEmpty()) {
            return "Моля въведете парола";
        }
        boolean foundUser = getUsers().stream().anyMatch(u -> u.getUsername().equals(username) && u.getPassword().equals(password));
        if (!foundUser) {
            return "Невалиден потребител";
        }
        return "Успешно влезнахте в системата";
    }
}
