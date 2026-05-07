import { assertWithLogging } from "../framework/gui";
import { checkoutStepOnePage } from "../pages";
import { errors } from "../fixtures";

class CheckoutStepOnePageAssertions {
	async verifyCheckoutError(errorType) {
		const actual = await checkoutStepOnePage.getCheckoutErrorText();
		const expected = errors[errorType];
		assertWithLogging(actual, expected, "Verify Checkout Error");
	}
}
export default new CheckoutStepOnePageAssertions();
