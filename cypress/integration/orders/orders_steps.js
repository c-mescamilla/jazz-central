import { Given, And } from "cypress-cucumber-preprocessor/steps";
import orderPage from '../pageObjects/ordersPage'

Then("I select {string} view", (option) => {
    //orderPage.selectOptionView(option)
    orderPage.switchMenu(option)
})