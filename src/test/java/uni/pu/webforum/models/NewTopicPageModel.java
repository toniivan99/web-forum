package uni.pu.webforum.models;

import uni.pu.webforum.LoginService;
import uni.pu.webforum.TopicService;

public class NewTopicPageModel {
    private String name;
    private String user;
    private String content;
    private String message;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void navigateToNewTopicPage() {
        System.out.println("Навигиране до страницата за добавяне на нова тема");
    }

    public void clickCreateTopicButton() {
        message = TopicService.createTopic(name, user, content);
    }
}
