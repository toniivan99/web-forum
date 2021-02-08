package uni.pu.webforum;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.webforum.models.LoginPageModel;

import static org.junit.Assert.assertEquals;

public class LoginSteps {
    private LoginPageModel loginPageModel = new LoginPageModel();

    @Given("^Потребителя отваря страницата за вход в системата$")
    public void openLoginPage() {
        loginPageModel.navigateToLoginPage();
    }

    @When("^Потребителя въвежда потребителско име \"([^\"]*)\"$")
    public void enterUsername(String username) {
        loginPageModel.setUsername(username);
    }

    @When("^Потребителя въвежда парола \"([^\"]*)\"$")
    public void enterPassword(String password) {
        loginPageModel.setPassword(password);
    }

    @When("^Потребителя натиска бутона за вход в системата$")
    public void clickLoginButton() {
        loginPageModel.clickLoginButton();
    }

    @Then("Получава съобщение \"([^\"]*)\"")
    public void checkLoginMessage(String message) {
        assertEquals(message, loginPageModel.getMessage());
    }
}
