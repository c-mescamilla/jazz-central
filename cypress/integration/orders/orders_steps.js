import { Given, And } from "cypress-cucumber-preprocessor/steps";
import orderPage from '../pageObjects/ordersPage'

//Click in menu tab for select Open/Closed/Canceled status
Then("I check the {string} tab option", (status) => {
    orderPage.elements.tab().contains(status).click()
})

//Select start date function
And("I select the start date in the date range calendar", () => {
    orderPage.getStartDate()
})

//Select end date function
And("I select the end date in the calendar", () => {
    orderPage.getEndDate()
})

//click on the Update button to execute the search
Then("I click {string} button", () => {
    orderPage.elements.updateButton().click()
})

//Select 90 days prior to the current date and place in field start date
And("I select 90 days before the current date in the calendar", () => {
    orderPage.get90DaysBefore()
})

//Get source code from data table
Then("I enter {string}", (sourceCode) => {
    orderPage.fillOrderDetails(sourceCode)
})

//Get barcode from data table
Then("I enter {string} value", (itemCode) => {
    orderPage.searchItems(itemCode)
})

//Enter customer name from data table and shipping address
And("I add the {string} and shipping address", (customer) => {
    orderPage.addCustomer(customer)
})

//select the same payment method as the selected customer
And("I add payment method", () => {
    orderPage.addPayment()
})

//Select shipping method
And("I select shipping method", () => {
    orderPage.selectShipping()
})

//Send the purchase information to generate the purchase order.
Then("I clic on Create Order button", () => {
    orderPage.elements.createOrderButton().click()
})

//Generate purchase order code
Then("I see order ID", () => {
    orderPage.getOrderID()
})