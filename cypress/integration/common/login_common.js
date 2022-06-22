import { Given, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../pageObjects/loginPage'

//Open URL//
Given("Go to Jazz Central page", () => {
    cy.visit(Cypress.env('url'))
})

//Verify Web site is working
And('A user will {string} message', (textMessage) => {
    loginPage.elements.titleMessage().should('contain', textMessage)
})

//reusable login
And('Success login with credentials', () => {
    loginPage.typeUsername(Cypress.env('userName'))
    loginPage.typePassword(Cypress.env('password'))
    loginPage.clickLogin()
})