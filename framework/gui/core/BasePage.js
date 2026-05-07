import { navigateTo } from "../utils/navigateTo.js";
import { logger } from "../../logger";

class BasePage {
	constructor(pageURL) {
		this.pageURL = pageURL;
	}

	async open() {
		await navigateTo(this.pageURL);
	}

	async refresh() {
		logger.info(`Refreshing page`);
		await browser.refresh();

		await this.verifyPageOpened();
	}

	async back() {
		logger.info(`Clicking back`);
		await browser.back();
	}

	async forward() {
		logger.info(`Clicking forward`);
		await browser.forward();
	}
}

export default BasePage;
