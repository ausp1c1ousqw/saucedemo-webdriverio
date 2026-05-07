import { Label, Button, Input, BasePage } from "../framework/gui";
import { infos } from "../fixtures";

class CheckoutStepOnePage extends BasePage {
	selectors = {
		firstNameField: "[data-test='firstName']",
		lastNameField: "[data-test='lastName']",
		postalCodeField: "[data-test='postalCode']",
		continueButton: "[data-test='continue']",
		checkoutError: "[data-test='error']",
	};

	constructor() {
		super("/checkout-step-one.html");
	}

	get firstNameField() {
		return new Input(this.selectors.firstNameField, "First Name Field");
	}

	get checkoutError() {
		return new Label(this.selectors.checkoutError, "Checkout Error");
	}

	get lastNameField() {
		return new Input(this.selectors.lastNameField, "Last Name Field");
	}

	get postalCodeField() {
		return new Input(this.selectors.postalCodeField, "Postal Code Field");
	}

	get continueButton() {
		return new Button(this.selectors.continueButton, "Continue Button");
	}

	async enterFirstName(firstName) {
		await this.firstNameField.typeText(firstName);
	}

	async enterLastName(lastName) {
		await this.lastNameField.typeText(lastName);
	}

	async enterPostalCode(postalCode) {
		await this.postalCodeField.typeText(postalCode);
	}

	async clickContinueButton() {
		await this.continueButton.click();
	}

	async getCheckoutErrorText() {
		return this.checkoutError.getText();
	}

	async submitCheckoutForm(infoType) {
		await this.enterFirstName(infos[infoType].firstName);
		await this.enterLastName(infos[infoType].lastName);
		await this.enterPostalCode(infos[infoType].postalCode);
		await this.clickContinueButton();
	}
}
export default new CheckoutStepOnePage();
