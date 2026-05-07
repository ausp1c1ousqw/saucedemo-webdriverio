import path from "path";
import { writeFile } from "fs/promises";
import { generateTimestampedFileName, ensureDirExists, getDailyDebugDir } from "../utils";
import { logger } from "../logger";

const debugDir = getDailyDebugDir();
const screenshotsDir = ensureDirExists(`${debugDir}/screenshots`);

export async function takeAndSaveScreenshot(testName) {
	try {
		const screenshot = await browser.takeScreenshot();

		const screenshotName = generateTimestampedFileName(testName, "png");
		const screenshotPath = path.join(screenshotsDir, screenshotName);

		await writeFile(screenshotPath, screenshot, "base64");

		logger.info(`Screenshot path: ${screenshotPath}`);

		return screenshot;
	} catch (err) {
		logger.warn(`Failed to take screenshot:  ${err.stack || err.message}`);
		return null;
	}
}
