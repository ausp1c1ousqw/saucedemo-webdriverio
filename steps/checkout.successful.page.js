import { checkoutSuccesfulPageAssertions } from "../assertions";
import { Then } from "@cucumber/cucumber";

Then("the checkout should be completed successfully", async () => {
	await checkoutSuccesfulPageAssertions.verifyCheckoutSuccessfulPage();
});
