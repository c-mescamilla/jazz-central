Feature: Inventory

    -Create positive and negative inventory adjustments.
    -Receive a PO.
    -Transfer inventory from a business type to another.
    -Receive inventory by ASN.
    -Receive inventory using the Standard Receiving option.
    -Putaway to active.
    -Putaway to reserve.

    Background:
        Given Go to Jazz Central page
        And A user will "Welcome to Jazz Central" message
        And Success login with credentials
        And I select the "TEA Living" in the list
        When A user clicks on the "Inventory" menu


    Scenario Outline: Transfer inventory from a business type to another
        And A user clicks on the "Inventory" submenu
        And I check "By Business Type" tab option
        And I sort the items in ascending order in the "None Available" column
        Then I select the transfer button from the table
        And I select "<From_Business>" in the list from business type 
        And I select "<To_Business>" in the list from business type 
        Then I click on the check box of the transfer column
        # And I click in preview button
        # And I click on the send button to transfer the quantity of items 

        Examples:
            | From_Business | To_Business 
            | None          | FLAT        