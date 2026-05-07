import { getAndSavePageSource, takeAndSaveScreenshot } from "../../framework/debugHelpers";
import { getCurrentTestFile } from "../../framework/logger";
import allure from "@wdio/allure-reporter";

export default async function (testName) {
	const logFile = await getCurrentTestFile();
	allure.addAttachment("Logs", logFile, "text/plain");

	const screenshot = await takeAndSaveScreenshot(testName);
	allure.addAttachment("Screenshot", Buffer.from(screenshot, "base64"), "image/png");

	const pageSource = await getAndSavePageSource(testName);
	allure.addAttachment("Page source", pageSource, "text/html");
}
