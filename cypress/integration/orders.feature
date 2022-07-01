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
        When A user clicks on the "Orders" menu
        

    Scenario: Test different date ranges in the Open, Closed and Canceled tabs in the View Orders screen
        And  A user clicks on the "View Orders" submenu
        Then I check the "Open" tab option
        And I select "Start_date" from date range calendar
        And I select "End_date" from date range calendar
    
        
        

        
       
