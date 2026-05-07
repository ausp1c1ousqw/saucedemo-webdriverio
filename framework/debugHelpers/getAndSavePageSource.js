import path from "path";
import { writeFile } from "fs/promises";
import { generateTimestampedFileName, ensureDirExists, getDailyDebugDir } from "../utils";
import { logger } from "../logger";

const debugDir = getDailyDebugDir();
const pageSourceDir = ensureDirExists(`${debugDir}/page_sources`);

export async function getAndSavePageSource(testName) {
	try {
		const pageSource = await browser.getPageSource();

		const pageSourceName = generateTimestampedFileName(testName, "html");
		const pageSourcePath = path.join(pageSourceDir, pageSourceName);

		await writeFile(pageSourcePath, pageSource, "utf-8");

		logger.info(`Page Source path: ${pageSourcePath}`);

		return pageSource;
	} catch (err) {
		logger.warn(`Failed to get page source: ${err.stack || err.message}`);
		return null;
	}
}
