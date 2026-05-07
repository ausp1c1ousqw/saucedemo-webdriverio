export function generateTimestampedFileName(testName, extension = "txt") {
	const sanitizedTestName = testName.replace(/\W+/g, "_");

	const now = new Date();
	const pad = (num, len = 2) => String(num).padStart(len, "0");

	const timePart = `${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;

	return `${sanitizedTestName}_${timePart}.${extension}`;
}
