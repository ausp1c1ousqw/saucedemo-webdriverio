import { When, Then } from "@cucumber/cucumber";
import { headerAssertions } from "../assertions";
import { header } from "../components";

Then("the cart badge should display {string}", async (number) => {
	await header.waitUntilBadgeCountEquals(number);
	await headerAssertions.verifyCartBadgeCount(number);
});

Then("the cart badge should not be displayed", async () => {
	await headerAssertions.verifyCartBadgeNotDisplayed();
});

When("the user logs out", async () => {
	await header.logout();
});
