import { Assertion } from "chai";
import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And("I click on tenant dropdown", () => {
    //TEA Living
    cy.get('#navbar-list-tenant').click({force: true})
    cy.wait(500)
})

And("I select child tenant ", () => {
    //TEA Living
    cy.get('#navbar-list-tenant').select('Zenfuel')
    cy.wait(500)
})
