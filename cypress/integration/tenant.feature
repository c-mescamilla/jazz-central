Feature: Tenants
    -Verify tenant tree is displayed correctly
    -Switch from the parent tenant to a child tenant

    Background:
        Given Go to Jazz Central page
        And A user will "Welcome to Jazz Central" message
        And Success login with credentials

    Scenario: Verify tenant tree is displayed correctly
        And I click on tenant dropdown

    Scenario: Switch from the parent tenant to a child tenant
        And I click on tenant dropdown
        And I select a child tenant from the parent tenant group


