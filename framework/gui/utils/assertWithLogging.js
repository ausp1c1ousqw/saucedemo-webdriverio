import { expect } from "chai";
import { logger } from "../../logger";

export function assertWithLogging(actual, expected, message) {
	const fullMessage = `${message}
Actual: '${actual}' 
Expected: '${expected}'`;

	logger.info(fullMessage);
	expect(actual).to.equal(expected, message);
}
