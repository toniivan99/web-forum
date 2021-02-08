package uni.pu.webforum;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.webforum.models.NewTopicPageModel;

import static org.junit.Assert.assertEquals;

public class NewTopicSteps {
    private NewTopicPageModel newTopicPageModel = new NewTopicPageModel();

    @Given("^Потребителя отваря страницата за добавяне на нова тема$")
    public void openNewTopicPage() {
        newTopicPageModel.navigateToNewTopicPage();
    }

    @When("^Потребителя въвежда име на темата \"([^\"]*)\"$")
    public void enterTopicName(String name) {
        newTopicPageModel.setName(name);
    }

    @When("^Системата взима името на потребителя като автор \"([^\"]*)\"$")
    public void getAuthorName(String name) {
        newTopicPageModel.setUser(name);
    }

    @When("^Потребителя въвежда съдържание на темата \"([^\"]*)\"$")
    public void enterTopicContent(String content) {
        newTopicPageModel.setContent(content);
    }

    @When("^Потребителя натиска бутона за създаване на темата$")
    public void clickCreateTopicButton() {
        newTopicPageModel.clickCreateTopicButton();
    }

    @Then("Получава съобщението \"([^\"]*)\"")
    public void checkMessage(String message) {
        assertEquals(message, newTopicPageModel.getMessage());
    }
}
