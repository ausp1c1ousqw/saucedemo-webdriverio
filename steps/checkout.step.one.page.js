import { Given, When, Then } from "@cucumber/cucumber";
import { checkoutStepOnePageAssertions } from "../assertions";
import { checkoutStepOnePage } from "../pages";

Given("the user is on the checkout page", async () => {
	await checkoutStepOnePage.open();
});

When("the user submits checkout form with {string} personal information", async (infoType) => {
	await checkoutStepOnePage.submitCheckoutForm(infoType);
});

Then("an {string} should be displayed on CheckoutPage", async (errorType) => {
	await checkoutStepOnePageAssertions.verifyCheckoutError(errorType);
});
