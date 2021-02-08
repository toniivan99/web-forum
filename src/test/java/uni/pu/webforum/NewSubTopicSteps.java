package uni.pu.webforum;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.webforum.models.NewSubTopicPageModel;

import static org.junit.Assert.assertEquals;

public class NewSubTopicSteps {
    private NewSubTopicPageModel newSubTopicPageModel = new NewSubTopicPageModel();

    @Given("^Потребителя отваря страницата за добавяне на подтема към съществуваща тема$")
    public void openNewSubTopicPage() {
        newSubTopicPageModel.navigateToNewSubTopicPage();
    }

    @When("^Потребителя въвежда име на подтемата \"([^\"]*)\"$")
    public void enterSubTopicName(String name) {
        newSubTopicPageModel.setName(name);
    }

    @When("^Потребителя въвежда съдържание на подтемата \"([^\"]*)\"$")
    public void enterSubTopicContent(String content) {
        newSubTopicPageModel.setContent(content);
    }

    @When("^Системата взима името на потребителя като автор на подтемата \"([^\"]*)\"$")
    public void getSubTopicAuthorName(String name) {
        newSubTopicPageModel.setUser(name);
    }

    @When("^Системата взима името на основната тема \"([^\"]*)\"$")
    public void getParentTopicName(String parentTopic) {
        newSubTopicPageModel.setParentTopic(parentTopic);
    }

    @When("^Потребителя натиска бутона за създаване на подтемата$")
    public void clickCreateSubTopicButton() {
        newSubTopicPageModel.clickCreateSubTopicButton();
    }

    @Then("Вижда съобщението \"([^\"]*)\"")
    public void checkMessage(String message) {
        assertEquals(message, newSubTopicPageModel.getMessage());
    }
}
