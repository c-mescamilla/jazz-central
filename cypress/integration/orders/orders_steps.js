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

Then("I enter source code", () => {
    orderPage.fillOrderDetails()
})

Then("I enter item code", () => {
    orderPage.searchItems()
})

And("I add the customer and shipping address", () => {
    orderPage.addCustomer()
})

And("I add payment method", () => {
    orderPage.addPayment()
})

And("I select shipping method", () => {
    orderPage.selectShipping()
})

Then("I clic on Create Order button", () => {
    orderPage.elements.createOrderButton().click()
})