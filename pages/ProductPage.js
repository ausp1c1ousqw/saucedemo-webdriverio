import { Label, Button, BasePage } from "../framework/gui";

class ProductPage extends BasePage {
	selectors = {
		pageTitle: "[data-test='title']",
		addToCartButton: (productId) => `[data-test="add-to-cart-${productId}"]`,
		removeButton: (productId) => `[data-test="remove-${productId}"]`,
	};

	constructor() {
		super("/inventory.html");
	}

	get pageTitle() {
		return new Label(this.selectors.pageTitle, "Product Page Title");
	}

	getAddToCartButtonFor(productId) {
		return new Button(
			this.selectors.addToCartButton(productId),
			`Add To Cart Button on ${productId}`,
		);
	}

	getRemoveButtonFor(productId) {
		return new Button(this.selectors.removeButton(productId), `Remove Button on ${productId}`);
	}

	async getPageTitleText() {
		return this.pageTitle.getText();
	}

	async clickAddToCartButtonFor(productId) {
		await this.getAddToCartButtonFor(productId).click();
	}

	async clickRemoveButtonFor(productId) {
		await this.getRemoveButtonFor(productId).click();
	}
}
export default new ProductPage();
