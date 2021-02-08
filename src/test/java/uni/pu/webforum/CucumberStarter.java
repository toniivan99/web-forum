package uni.pu.webforum;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature", plugin = { "pretty", "html:targer/cucumberReport"}, monochrome = true)
public class CucumberStarter {
}
