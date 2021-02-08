package uni.pu.webforum.models;

import uni.pu.webforum.CommentService;

public class DeleteCommentPageModel {
    private String content;
    private String user;
    private String topic;
    private String message;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void clickDeleteCommentButton() {
        System.out.println("Показване на съобщение за потвърждение");
    }

    public void clickConfirmationButton() {
        message = CommentService.deleteComment(content, user, topic);
    }
}
