Feature: Login/logout mechanism

    Tests for the login mechanism and logout

    Background:
        Given Go to Jazz Central page
        And A user will "Welcome to Jazz Central" message

    @test1
    Scenario: Login with valid credentials
        When A user enter credentials
            | username                   | password      |
            | c-miguel.gonzalez@cart.com | Changeme123!1 |
        And A user clicks on Login button
        And Verify that it is inside "Orders"

    @test2
    Scenario: Logout
        When A user enter credentials
            | username                   | password      |
            | c-miguel.gonzalez@cart.com | Changeme123!1 |
        And A user clicks on Login button
        And Verify that it is inside "Orders"
        Then A user clicks on Logout button
        And A user will "You have been logged out." message

    @test3
    Scenario: Login with invalid credentials
        When A user enter credentials
            | username                      | password         |
            | c-marbella.escamilla@cart.com | incorretpassword |
        And A user clicks on Login button
        And A user will "Unable to Login" message

    @test4
    Scenario: Reset password
        When A user clicks on Forgot password button
        And Verify user will "Forgot Password" message
        Then A user enter email
            | username                      |
            | c-marbella.escamilla@cart.com |
        And A user clicks on Reset Password button
        And Verify user receiving "Password Reset Sent!" message