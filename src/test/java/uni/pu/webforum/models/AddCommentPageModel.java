package uni.pu.webforum.models;

import uni.pu.webforum.CommentService;

public class AddCommentPageModel {
    private String content;
    private String author;
    private String topic;
    private String message;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
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

    public void navigateToAddCommentPage() {
        System.out.println("Навигиране до страницата за добавяне на коментар");
    }

    public void clickAddCommentButton() {
        message = CommentService.addComment(content, author, topic);
    }
}
