package uni.pu.webforum;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.webforum.models.AddCommentPageModel;

import static org.junit.Assert.assertEquals;

public class AddCommentSteps {
    private AddCommentPageModel addCommentPageModel = new AddCommentPageModel();

    @Given("^Потребителя отваря страницата за добавяне на коментар към тема$")
    public void openAddCommentPage() {
        addCommentPageModel.navigateToAddCommentPage();
    }

    @When("^Потребителя въвежда съдържанието на коментара \"([^\"]*)\"$")
    public void getCommentContent(String content) {
        addCommentPageModel.setContent(content);
    }

    @When("^Системата взима потребителското име на потребителя \"([^\"]*)\"$")
    public void getUserName(String name) {
        addCommentPageModel.setAuthor(name);
    }

    @When("^Системата взима заглавието на темата \"([^\"]*)\"$")
    public void getTopicName(String name) {
        addCommentPageModel.setTopic(name);
    }

    @When("^Натиска бутона за добавяне на коментар$")
    public void clickAddCommentButton() {
        addCommentPageModel.clickAddCommentButton();
    }

    @Then("Вижда съобщение на екрана \"([^\"]*)\"")
    public void checkLoginMessage(String message) {
        assertEquals(message, addCommentPageModel.getMessage());
    }
}
