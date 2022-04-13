Feature: As a user I expect to be able to use the login page

    @dev
    @smoke
    @regression
    Scenario: As a user I expect to be able to see the login form
        Given I am on the "login" page
        Then the "login form" should contain a login button