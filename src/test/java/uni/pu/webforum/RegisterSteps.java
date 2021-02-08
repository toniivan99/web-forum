package uni.pu.webforum;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.webforum.models.RegisterPageModel;

import static org.junit.Assert.assertEquals;

public class RegisterSteps {
    private RegisterPageModel registerPageModel = new RegisterPageModel();

    @Given("^Потребителя отваря страницата за регистрация в системата$")
    public void openRegisterPage() {
        registerPageModel.navigateToRegisterPage();
    }

    @When("^Потребителя въвежда потребителско име за регистрация \"([^\"]*)\"$")
    public void enterUsername(String username) {
        registerPageModel.setUsername(username);
    }

    @When("^Потребителя въвежда парола за регистрация \"([^\"]*)\"$")
    public void enterPassword(String password) {
        registerPageModel.setPassword(password);
    }

    @When("^Потребителя натиска бутона за регистрация в системата$")
    public void clickRegisterButton() {
        registerPageModel.clickRegisterButton();
    }

    @Then("Получава съобщението на екрана \"([^\"]*)\"")
    public void checkRegisterMessage(String message) {
        assertEquals(message, registerPageModel.getMessage());
    }
}
