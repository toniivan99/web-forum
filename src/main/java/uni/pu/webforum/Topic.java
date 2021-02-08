package uni.pu.webforum;

import java.util.HashSet;
import java.util.Set;

public class Topic {

    public Topic() {
    }

    private String name;

    private User author;

    private Set<Topic> subTopics = new HashSet<>();

    private Topic parentTopic;

    private Set<Comment> comments = new HashSet<>();

    private String content;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Set<Topic> getSubTopics() {
        return subTopics;
    }

    public void setSubTopics(Set<Topic> subTopics) {
        this.subTopics = subTopics;
    }

    public Topic getParentTopic() {
        return parentTopic;
    }

    public void setParentTopic(Topic parentTopic) {
        this.parentTopic = parentTopic;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}