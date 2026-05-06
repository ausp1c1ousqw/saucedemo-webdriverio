import { When } from "@cucumber/cucumber";
import { checkoutStepTwoPage } from "../pages";

When("the user finishes checkout", async () => {
  await checkoutStepTwoPage.clickFinishButton();
});
