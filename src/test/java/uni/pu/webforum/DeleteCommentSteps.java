package uni.pu.webforum;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.webforum.models.DeleteCommentPageModel;

import static org.junit.Assert.assertEquals;

public class DeleteCommentSteps {
    private DeleteCommentPageModel deleteCommentPageModel = new DeleteCommentPageModel();

    @Given("^Потребителя натиска бутона за изтриване на коментара$")
    public void openDeleteCommentPage() {
        deleteCommentPageModel.clickDeleteCommentButton();
    }

    @When("^Системата взима съдържанието на коментара \"([^\"]*)\"$")
    public void getCommentContent(String content) {
        deleteCommentPageModel.setContent(content);
    }

    @When("^Системата взима потребителското име на потребителят \"([^\"]*)\"$")
    public void getUserName(String name) {
        deleteCommentPageModel.setUser(name);
    }

    @When("^Системата взима името на името на темата към която е коментара \"([^\"]*)\"$")
    public void getTopicName(String name) {
        deleteCommentPageModel.setTopic(name);
    }

    @When("^Потребителя натиска бутона за потвърждение за изтриване на коментара$")
    public void clickDeleteButton() {
        deleteCommentPageModel.clickConfirmationButton();
    }

    @Then("Вижда съобщението на екрана \"([^\"]*)\"")
    public void checkDeletedMessage(String message) {
        assertEquals(message, deleteCommentPageModel.getMessage());
    }
}
