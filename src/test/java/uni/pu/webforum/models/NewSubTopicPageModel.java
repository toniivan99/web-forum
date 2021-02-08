package uni.pu.webforum.models;

import uni.pu.webforum.TopicService;

public class NewSubTopicPageModel {
    private String name;
    private String user;
    private String content;
    private String parentTopic;
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

    public String getParentTopic() {
        return parentTopic;
    }

    public void setParentTopic(String parentTopic) {
        this.parentTopic = parentTopic;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void navigateToNewSubTopicPage() {
        System.out.println("Навигиране до страницата за добавяне на подтема");
    }

    public void clickCreateSubTopicButton() {
        message = TopicService.createSubTopic(name, user, content, parentTopic);
    }
}
