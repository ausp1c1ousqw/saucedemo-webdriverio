import { assertWithLogging } from "../framework/gui";
import { cartPage } from "../pages";

class CartPageAssertions {
	async verifyNumberOfProductsInCart(expected) {
		const actual = await cartPage.getProductsQuantity();
		assertWithLogging(actual, expected, "Verify Number Of Products");
	}
}
export default new CartPageAssertions();
