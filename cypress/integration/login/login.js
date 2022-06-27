import { Assertion } from "chai";
import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("Go to Jazz Central page", () => {
    cy.visit(Cypress.env('url'))
})

And("Check is available", () => {
    cy.get('#wrapper > :nth-child(1) > h4').should('contain', 'Welcome to Jazz Central')
})

When("Type user {string}", (name) => {
    cy.get('#id_username').type(name)
    //cy.get('#id_username').type(Cypress.env('userName'))
})

And("Type {string}", (password) => {
    cy.get('#id_password').type(password)
    //cy.get('#id_password').type(Cypress.env('password'))
})

Then("Click on Login", () => {
    cy.get('#login').click()
})

And("Verify that it is inside", () => {
    cy.get('.col-xs-12 > h1').should('contain', 'Orders')
})




Given("I am in login page", () => {
    cy.visit(Cypress.env('url'))
})
When("I enter as register user", () => {
    cy.get('#id_username').type(Cypress.env('userName'))
    cy.get('#id_password').type(Cypress.env('password'))
    cy.get('#login').click()
})
Then("I see homepage", () => {
    cy.get('.col-xs-12 > h1').should('contain', 'Orders')
})