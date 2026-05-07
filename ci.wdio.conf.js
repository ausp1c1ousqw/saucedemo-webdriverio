import { subscribeLoggerToProcessEvents } from "./framework/logger/index.js";
import { loadEnv } from "./framework/utils/index.js";

loadEnv(".env.ci");

subscribeLoggerToProcessEvents();

export const config = {
	specs: ["./features/**/*.feature"],
	logLevel: "silent",
	maxInstances: 3,

	capabilities: [
		{
			browserName: "chrome",
			maxInstances: 3,
			"goog:chromeOptions": {
				args: [
					"--headless=new",
					"--disable-gpu",
					"--no-sandbox",
					"--disable-dev-shm-usage",
					"--window-size=1920,1080",
				],
			},
		},
	],

	framework: "cucumber",

	reporters: [
		"spec",
		[
			"allure",
			{
				outputDir: "artifacts/allure-results",
				disableWebdriverStepsReporting: true,
				disableWebdriverScreenshotsReporting: true,
				useCucumberStepReporter: true,
			},
		],
	],
	cucumberOpts: {
		require: ["./steps/*.js", "./features/support/**/*.js"],
		tagExpression: "not @skip",
	},
};
