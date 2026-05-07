import { BasePage, Label, Input, Button } from "../framework/gui";
import { users } from "../fixtures";

class LoginPage extends BasePage {
	selectors = {
		userNameField: "[data-test='username']",
		passwordField: "[data-test='password']",
		loginButton: "[data-test='login-button']",
		loginLogo: ".login_logo",
		loginError: "[data-test='error']",
	};

	constructor() {
		super("/");
	}

	get userNameField() {
		return new Input(this.selectors.userNameField, "Username Field");
	}

	get passwordField() {
		return new Input(this.selectors.passwordField, "Password Field");
	}

	get loginButton() {
		return new Button(this.selectors.loginButton, "Login Button");
	}

	get loginLogo() {
		return new Label(this.selectors.loginLogo, "Login Logo");
	}

	get loginError() {
		return new Label(this.selectors.loginError, "Login Error");
	}

	async enterUsername(username) {
		await this.userNameField.typeText(username);
	}

	async enterPassword(password) {
		await this.passwordField.typeText(password);
	}

	async clickLoginButton() {
		await this.loginButton.click();
	}

	async getLoginErrorText() {
		return this.loginError.getText();
	}

	async getLoginLogoText() {
		return this.loginLogo.getText();
	}

	async loginAs(userType) {
		await this.open();
		await this.enterUsername(users[userType].username);
		await this.enterPassword(users[userType].password);
		await this.clickLoginButton();
	}
}
export default new LoginPage();
