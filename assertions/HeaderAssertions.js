import { assertWithLogging } from "../framework/gui";
import { header } from "../components";

class HeaderAssertions {
	async verifyCartBadgeCount(expected) {
		const actual = await header.getCartBadgeCount();
		assertWithLogging(actual, expected, "Verify Cart Badge Count");
	}

	async verifyCartBadgeNotDisplayed() {
		const actual = await header.cartBadge.isVisible();
		const expected = false;
		assertWithLogging(actual, expected, "Verify Visibility");
	}
}
export default new HeaderAssertions();
