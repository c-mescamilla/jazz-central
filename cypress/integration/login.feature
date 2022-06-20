Feature: Primera prueba cucumber

    Test of cucumber preprocessor working

@test1
Scenario Outline: Access to Jazz Central
    Given Go to Jazz Central page
    And Check is available
    When Type user '<name>'
    And Type '<password>'
    Then Click on Login
    And Verify that it is inside

    Examples:
        | name                           | password    |
        | c-miguel.gonzalez@cart.com     | Changeme123!1|
        | c-Marbella.Escamilla@cart.com  | Changeme123!1|

@test2 @focus
Scenario: open home page
    Given I am in login page
    When I enter as register user
    Then I see homepage