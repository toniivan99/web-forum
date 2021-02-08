package uni.pu.webforum;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.webforum.models.DeleteTopicPageModel;

import static org.junit.Assert.assertEquals;

public class DeleteTopicSteps {
    private DeleteTopicPageModel deleteTopicPageModel = new DeleteTopicPageModel();

    @Given("^Потребителя натиска бутона за изтриване на темата$")
    public void openDeletePage() {
        deleteTopicPageModel.clickDeleteButton();
    }

    @When("^Системата взима името на темата \"([^\"]*)\"$")
    public void getTopicName(String name) {
        deleteTopicPageModel.setTopicName(name);
    }

    @When("^Системата взима името на потребителя \"([^\"]*)\"$")
    public void getUserName(String username) {
        deleteTopicPageModel.setUserName(username);
    }

    @When("^Потребителя натиска бутона за потвърждение за изтриване на темата$")
    public void clickDeleteButton() {
        deleteTopicPageModel.clickConfirmationButton();
    }

    @Then("Вижда съобщение \"([^\"]*)\"")
    public void checkDeletedMessage(String message) {
        assertEquals(message, deleteTopicPageModel.getMessage());
    }
}
