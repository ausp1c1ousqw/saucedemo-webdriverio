
Feature: Checkout process

  As a user
  I want to complete checkout
  So that I can purchase selected products

  Background:
    Given the user logs in as "standard user"
    And the user adds the following products to the cart:
      | productId            |
      | sauce-labs-backpack      |
    And the user is on the checkout page

  Scenario: Successful checkout with valid data
    When the user submits checkout form with "valid" personal information
    And the user finishes checkout
    Then the checkout should be completed successfully

  Scenario: Checkout with missing personal information
    When the user submits checkout form with "missing" personal information
    Then an "checkout error" should be displayed on CheckoutPage
