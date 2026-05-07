import { logger } from "./logger.js";
import winston from "winston";
import { generateTimestampedFileName, ensureDirExists, getDailyDebugDir } from "../utils/index.js";
import fs from "fs/promises";
import path from "path";

let testTransport = null;
let currentTestFile = null;
const debugDir = getDailyDebugDir();
const testsLogDir = ensureDirExists(`${debugDir}/logs/tests`);

export function startLoggingForTest(testName) {
	const filename = createLogFileForTest(testName);
	testTransport = logger.add(new winston.transports.File({ filename }));
}

export async function getCurrentTestFile() {
	return await fs.readFile(currentTestFile, "utf-8");
}

export function stopLoggingForTest() {
	logger.remove(testTransport);
}

function createLogFileForTest(testName) {
	const logFileName = generateTimestampedFileName(testName, "log");
	const logFilePath = path.join(testsLogDir, logFileName);

	currentTestFile = logFilePath;
	return logFilePath;
}
