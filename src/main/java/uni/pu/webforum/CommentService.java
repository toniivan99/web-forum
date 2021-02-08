package uni.pu.webforum;

import java.util.HashSet;
import java.util.Set;

public class CommentService {
    private static Set<Comment> comments = new HashSet<>();

    public static Set<Comment> getComments() {
        if (comments.isEmpty()) {
            Comment comment = new Comment();
            comment.setContent("Hello");
            User author = LoginService.getUsers().stream().filter(u -> u.getUsername().equals("Ivan")).findFirst().get();
            Topic topic = TopicService.getTopics().stream().filter(t -> t.getName().equals("Test")).findFirst().get();
            author.getComments().add(comment);
            topic.getComments().add(comment);
            comment.setAuthor(author);
            comment.setTopic(topic);
            comments.add(comment);
        }
        return comments;
    }

    public static String addComment(String content, String authorName, String topicName) {
        if (content == null || content.isEmpty()) {
            return "Моля въведете съдържание на коментара";
        }
        Comment comment = new Comment();
        comment.setContent(content);
        User author = LoginService.getUsers().stream().filter(u -> u.getUsername().equals(authorName)).findFirst().get();
        comment.setAuthor(author);
        Topic topic = TopicService.getTopics().stream().filter(t -> t.getName().equals(topicName)).findFirst().get();
        comment.setTopic(topic);
        topic.getComments().add(comment);
        author.getComments().add(comment);
        return "Успешно добавихте коментар";
    }

    public static String deleteComment(String content, String username, String topicName) {
        Comment comment = getComments().stream()
                .filter(c -> c.getContent().equals(content) &&
                        c.getTopic().getName().equals(topicName)).findFirst().get();
        User user = LoginService.getUsers().stream().filter(u -> u.getUsername().equals(username)).findFirst().get();
        Topic topic = TopicService.getTopics().stream().filter(t -> t.getName().equals(topicName)).findFirst().get();
        if (!user.getRole().equals("Administrator") && !comment.getAuthor().getUsername().equals(username)) {
            return "Нямате права да изтриете коментара";
        }
        User author = LoginService.getUsers().stream().filter(u -> u.getComments().contains(comment)).findFirst().get();
        author.getComments().remove(comment);
        topic.getComments().remove(comment);
        comments.remove(comment);
        return "Успешно изтрихте коментара";
    }
}
