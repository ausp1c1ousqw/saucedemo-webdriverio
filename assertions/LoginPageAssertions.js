import { assertWithLogging } from "../framework/gui";
import { loginPage } from "../pages";
import { errors, titles } from "../fixtures";

class LoginPageAssertions {
	async verifyLoginError(error) {
		const actual = await loginPage.getLoginErrorText();
		const expected = errors[error];
		assertWithLogging(actual, expected, "Verify Login Error");
	}

	async verifyLoginPage() {
		const actual = await loginPage.getLoginLogoText();
		const expected = titles.loginPage;
		assertWithLogging(actual, expected, "Verify Login Page Opened");
	}
}
export default new LoginPageAssertions();
