import onError from "./onError.js";
import { logger, startLoggingForTest, stopLoggingForTest } from "../../framework/logger";
import { Before, After, BeforeStep, AfterStep } from "@cucumber/cucumber";

Before(async function ({ pickle }) {
	startLoggingForTest(pickle.name);
	logger.info(`Scenario Started: ${pickle.name}`);
});

AfterStep(async function ({ pickle, result }) {
	if (result?.status === "FAILED") {
		logger.error(result.message);
		await onError(pickle.name);
		throw new Error(result.message);
	}
});

After(async function ({ pickle }) {
	logger.info(`Scenario Ended: ${pickle.name}`);
	stopLoggingForTest();
	await browser.deleteCookies();
	await browser.execute(() => localStorage.clear());
});
