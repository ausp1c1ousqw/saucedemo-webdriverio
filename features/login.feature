
Feature: User authentication

  As a user
  I want to log in to the application
  So that I can access product functionality

  Scenario: Successful login with valid credentials
    When the user logs in as "standard user"
    Then the Product Page should be displayed

  Scenario: Login with invalid credentials
    When the user logs in as "invalid user"
    Then an "login error" should be displayed
  
  Scenario: Login with locked out user
    When the user logs in as "locked out user"
    Then an "locked out error" should be displayed 