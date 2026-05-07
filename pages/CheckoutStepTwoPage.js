import { Button, BasePage } from "../framework/gui";

class CheckoutStepTwoPage extends BasePage {
	selectors = {
		finishButton: "[data-test='finish']",
	};

	get finishButton() {
		return new Button(this.selectors.finishButton, "Finish Button");
	}

	async clickFinishButton() {
		await this.finishButton.click();
	}
}
export default new CheckoutStepTwoPage();
