import { assertWithLogging } from "../framework/gui";
import { checkoutSuccessfulPage } from "../pages";
import { titles } from "../fixtures";

class CheckoutSuccessfulPageAssertions {
	async verifyCheckoutSuccessfulPage() {
		const actual = await checkoutSuccessfulPage.getPageTitleText();
		const expected = titles.checkoutSuccessfulPage;
		assertWithLogging(actual, expected, "Verify Checkout Successful Page Opened");
	}
}
export default new CheckoutSuccessfulPageAssertions();
