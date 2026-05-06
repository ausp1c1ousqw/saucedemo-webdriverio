import { Button, Label, Link, waitUntil } from "../framework/gui";

class Header {
  selectors = {
    burgerMenuButton: "#react-burger-menu-btn",
    cartButton: "[data-test=shopping-cart-link]",
    cartBadge: "[data-test=shopping-cart-badge]",
    logoutLink: "[data-test=logout-sidebar-link]",
  };

  get burgerMenuButton() {
    return new Button(this.selectors.burgerMenuButton, "Burger Menu Button");
  }

  get cartBadge() {
    return new Label(this.selectors.cartBadge, "Cart Badge");
  }

  get cartButton() {
    return new Button(this.selectors.cartButton, "Cart Button");
  }

  get logoutLink() {
    return new Link(this.selectors.logoutLink, "Logout Link");
  }

  async clickBurgerMenuButton() {
    await this.burgerMenuButton.click();
  }

  async clickCartButton() {
    await this.cartButton.click();
  }

  async getCartBadgeCount() {
    return this.cartBadge.getText();
  }

  async clickLogoutLink() {
    await this.logoutLink.click();
  }

  async logout() {
    await this.clickBurgerMenuButton();
    await this.clickLogoutLink();
  }
  
  async waitUntilBadgeCountEquals(expected) {
    await waitUntil(
      async () => (await this.getCartBadgeCount()) === expected,
      `cart badge count is ${expected}`,
    );
  }
}
export default new Header();
