import { Then } from "@cucumber/cucumber";
import { cartPageAssertions } from "../assertions";
import { cartPage } from "../pages";

Then(/^the cart should contain (\d+) products?$/, async (number) => {
	await cartPage.open();
	await cartPageAssertions.verifyNumberOfProductsInCart(number);
});
