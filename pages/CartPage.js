import { Button, BasePage } from "../framework/gui";

class CartPage extends BasePage {
	selectors = {
		cartProduct: "[data-test='inventory-item']",
		removeButton: (productId) => `[data-test='remove-${productId}']`,
	};

	constructor() {
		super("/cart.html");
	}

	getRemoveButtonFor(productId) {
		return new Button(this.selectors.removeButton(productId), "Remove Button");
	}

	async getProductsQuantity() {
		const cartProducts = await $$(this.selectors.cartProduct);
		return cartProducts.length;
	}

	async clickRemoveButtonFor(productId) {
		await this.getRemoveButtonFor(productId).click();
	}
}
export default new CartPage();
