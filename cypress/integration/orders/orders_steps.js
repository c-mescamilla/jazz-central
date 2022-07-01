import { Given, And } from "cypress-cucumber-preprocessor/steps";
import orderPage from '../pageObjects/ordersPage'

Then ("I check the {string} tab option", (status) => {
    orderPage.elements.openTab().contains(status).click
    orderPage.getStartDate()
})