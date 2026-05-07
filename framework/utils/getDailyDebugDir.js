import path from "path";
import { ensureDirExists } from "./ensureDirExists.js";

const debugDir = process.env.DEBUG_DIR || "./artifacts";

export function getDailyDebugDir() {
	const today = new Date();
	const dateString = today.toISOString().split("T")[0];
	const dailyDebugDir = path.join(debugDir, dateString);
	return ensureDirExists(dailyDebugDir);
}
