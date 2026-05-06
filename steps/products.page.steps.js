import { Given, When, Then } from "@cucumber/cucumber";
import { productPage } from "../pages";
import { productPageAssertions } from "../assertions";

Given("the user is on the Product Page", async () => {
  await productPage.open();
});

Then("the Product Page should be displayed", async () => {
  await productPageAssertions.verifyProductPage();
});

When("the user adds the following products to the cart:", async (dataTable) => {
  const products = dataTable.hashes();
  for (const { productId } of products) {
    await productPage.clickAddToCartButtonFor(productId);
  }
});

When("the user removes the following products from the cart:", async (dataTable) => {
  const products = dataTable.hashes();
  for (const { productId } of products) {
    await productPage.clickRemoveButtonFor(productId);
  }
});
