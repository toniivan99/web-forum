package uni.pu.webforum;

import java.util.HashSet;
import java.util.Set;

public class TopicService {
    private static Set<Topic> topics = new HashSet<>();

    public static Set<Topic> getTopics() {
        if (topics.isEmpty()) {
            Topic topic = new Topic();
            topic.setName("Test");
            User user = LoginService.getUsers().stream().filter(u -> u.getUsername().equals("Ivan")).findFirst().get();
            user.getTopics().add(topic);
            topic.setAuthor(user);
            topics.add(topic);
        }
        return topics;
    }

    public static String createTopic(String name, String authorName, String content) {
        if (name == null || name.isEmpty()) {
            return "Моля въведете име на темата";
        } else if (content == null || content.isEmpty()) {
            return "Моля въведете съдържание за темата";
        }
        User author = LoginService.getUsers().stream().filter(u -> u.getUsername().equals(authorName)).findFirst().get();
        Topic topic = new Topic();
        topic.setName(name);
        topic.setAuthor(author);
        topic.setContent(content);
        author.getTopics().add(topic);
        topics.add(topic);
        return "Успешно добавихте темата";
    }

    public static String createSubTopic(String name, String authorName, String content, String parentTopicName) {
        if (name == null || name.isEmpty()) {
            return "Моля въведете име на подтемата";
        } else if (content == null || content.isEmpty()) {
            return "Моля въведете съдържание за подтемата";
        }
        User author = LoginService.getUsers().stream().filter(u -> u.getUsername().equals(authorName)).findFirst().get();
        Topic parentTopic = getTopics().stream().filter(t -> t.getName().equals(parentTopicName)).findFirst().get();
        Topic topic = new Topic();
        topic.setName(name);
        topic.setAuthor(author);
        topic.setContent(content);
        author.getTopics().add(topic);
        topic.setParentTopic(parentTopic);
        parentTopic.getSubTopics().add(topic);
        topics.add(topic);
        return "Успешно добавихте подтемата";
    }

    public static String deleteTopic(String topicName, String userName) {
        if (topicName == null || topicName.isEmpty()) {
            return "Моля въведете името на темата";
        }
        Topic topic = getTopics().stream().filter(t -> t.getName().equals(topicName)).findFirst().get();
        User user = LoginService.getUsers().stream().filter(u -> u.getUsername().equals(userName)).findFirst().get();
        if (!user.getRole().equals("Administrator") && !topic.getAuthor().getUsername().equals(user.getUsername())) {
            return "Нямате права да изтриете темата";
        }
        User author = LoginService.getUsers().stream().filter(u -> u.getTopics().contains(topic)).findFirst().get();
        author.getTopics().remove(topic);
        getTopics().stream().filter(t -> t.getSubTopics().contains(topic)).forEach(t -> t.getSubTopics().remove(topic));
        topics.remove(topic);
        return "Успешно изтрихте темата";
    }
}
