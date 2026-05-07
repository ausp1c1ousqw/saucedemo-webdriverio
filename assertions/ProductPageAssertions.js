import { assertWithLogging } from "../framework/gui";
import { productPage } from "../pages";
import { titles } from "../fixtures";

class ProductPageAssertions {
	async verifyProductPage() {
		const actual = await productPage.getPageTitleText();
		const expected = titles.productPage;
		assertWithLogging(actual, expected, "Verify Product Page Opened");
	}
}
export default new ProductPageAssertions();
