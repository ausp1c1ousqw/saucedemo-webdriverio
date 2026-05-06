Feature: Cart badge counter

  As a user
  I want to see correct cart item count
  So that I know how many products I selected

  Background:
    Given the user logs in as "standard user"

  Scenario: Cart badge updates when product is added
    When the user adds the following products to the cart:
      | productId            |
      | sauce-labs-backpack      |
    Then the cart badge should display "1"

  Scenario: Cart badge updates when product is removed
    Given the user adds the following products to the cart:
      | productId            |
      | sauce-labs-backpack      |
    When the user removes the following products from the cart:
      | productId            |
      | sauce-labs-backpack      |
    Then the cart badge should not be displayed
