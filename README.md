# SauceDemo UI Test Automation (WebdriverIO + Cucumber)

## Project overview

This project is UI test automation suite for the **Sauce Demo** web application (`saucedemo.com`). It validates key user journeys such as **authentication**, **product browsing**, **cart interactions**, and **checkout** using BDD-style Gherkin scenarios and a Page Object Model.

## Tech stack

- **Language**: JavaScript (ES6) with **ES Modules** (`"type": "module"`)
- **Test runner**: **WebdriverIO**
- **BDD framework**: **Cucumber** (Gherkin `.feature` files + step definitions)
- **Assertions**: **Chai**
- **Reporting**: **Allure** (`@wdio/allure-reporter` + `allure-commandline`)
- **Configuration**: `.env` files via `dotenv`
- **Logging**: `winston` + per-test log files (attached to Allure on failure)
- **CI/CD**: **GitHub Actions**
- **Package manager**: **npm** (uses `package-lock.json`)
- **Node.js**: **>= 18** (recommended for WebdriverIO v9)

## Project structure

```text
features/            # Gherkin scenarios
  support/           # Cucumber hooks + error handling
steps/               # Step definitions
pages/               # Page Objects
assertions/          # Assertion helpers
framework/           # BasePage/BaseElement, element wrappers, logging, debug helpers
local.wdio.conf.js   # Local run config (loads .env.local)
ci.wdio.conf.js      # CI run config (loads .env.ci, headless)
artifacts/           # Generated: allure results/report + debug artifacts
```

## Installation

**Prerequisites**: Node.js **>= 18**, Google Chrome.

```bash
npm ci
```

## Run tests

- **Local (headed)**:

```bash
npm test
```

- **CI (headless)**:

```bash
npm run test-ci
```

## Environment configuration

Env files are loaded by WDIO configs:

- Local: `.env.local`
- CI: `.env.ci`

Key variables (see `.env.example`):

- `BASE_URL`
- `TIMEOUT_SHORT`, `TIMEOUT_MEDIUM`, `TIMEOUT_LONG`
- `LOG_LEVEL`, `TEST_LOG_LEVEL`
- `LOG_TO_CONSOLE`, `LOG_TO_FILE`
- `DEBUG_DIR` (default `./artifacts`)

## Reporting (Allure)

- Results: `artifacts/allure-results`
- Report: `artifacts/allure-report`
- Published report on GitHub Pages: [Allure Report](https://ausp1c1ousqw.github.io/saucedemo-webdriverio/)

```bash
npm run allure:generate
npm run allure:open
```

On failure, Allure attachments include **logs**, **screenshot**, and **page source**.

## Example

```gherkin
Scenario: Successful login with valid credentials
  When the user logs in as "standard user"
  Then the Product Page should be displayed
```

```js
When("the user logs in as {string}", async (userType) => {
	await loginPage.loginAs(userType);
});
```
