package uni.pu.webforum.models;

import uni.pu.webforum.TopicService;

public class DeleteTopicPageModel {
    private String topicName;
    private String userName;
    private String message;

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void clickDeleteButton() {
        System.out.println("Показване на съобщение за потвърждение");
    }

    public void clickConfirmationButton() {
        message = TopicService.deleteTopic(topicName, userName);
    }
}
