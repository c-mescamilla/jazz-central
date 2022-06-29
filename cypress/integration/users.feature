Feature: User/Group creation

    Tests for: 
    -Create user.
    -Edit user.
    -Create group.
    -Modify group permissions.
    -Assign user to a group.
    -Modify user groups.
    -Repeat step A with the newly created user.
    -Validate permissions work as expected.

    Background:
        Given Go to Jazz Central page
        And A user will "Welcome to Jazz Central" message
        And Success login with credentials

    @test1
    Scenario: Create user
        When A user clicks on the "System" menu
        And A user clicks on the "Users and Groups" submenu
        And A user clicks on the "Users" sub-submenu