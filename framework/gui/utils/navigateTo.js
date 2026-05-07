import { logger } from "../../logger";

const baseUrl = process.env.BASE_URL;

export async function navigateTo(path = "") {
	logger.info(`Build full URL from path: ${path}`);
	const fullUrl = buildUrl(path);

	logger.info(`Navigate to: "${fullUrl}"`);
	await browser.url(fullUrl);
}

function buildUrl(path = "") {
	const url = path.startsWith("http") ? path : new URL(path, baseUrl).toString();
	return url;
}
