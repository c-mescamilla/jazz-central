Feature: Orders

    -Test different date ranges in the Open, Closed and Canceled tabs in the View Orders screen.
    -Create orders with single and multiple lines.
    -Place orders with domestic and international ship codes.
    -Create lines with backorders.
    -Create an order with multiple PCTLs
    -Create orders with multiple shiptos.
    -Verify orders allocate as defined on the rules.
    -Verify pick tickets are created.
    -Cancel orders partially and in full from the View Order screen.
    -Verify reverting shipments works as expected.
    -View shipments on orders.

    Background:
        Given Go to Jazz Central page
        And A user will "Welcome to Jazz Central" message
        And Success login with credentials
        And I select the "TEA Living" in the list  
        And I select "Orders" menu option 


    Scenario: Scenario Outline name: Test different date ranges in the Open, Closed and Canceled tabs in the View Orders screen
        Then I select "View Orders" view
        

        
       
