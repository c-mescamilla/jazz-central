Feature: Feature name

    -Verify tenant tree is displayed correctly.
    -Switch from the parent tenant to a child tenant.
    -Switch from the parent tenant to a grandchild tenant.
    -Create a tenant.
    -Add a facility with the WMS workflow to the above tenant.

Background: 
        Given Go to Jazz Central page
        And A user will "Welcome to Jazz Central" message
        And Success login with credentials

Scenario: Verify
    And I click on tenant dropdown