import { Assertion } from "chai";
import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And("I click on tenant dropdown", () => {
    //TEA Living
    // cy.get('#view-as-tenant-select').find('option').each(($el, index) => {
    //     cy.get('#view-as-tenant-select').select(index, { timeout: 110000 }).should('not.be.undefined')
    //     cy.wait(5000)
    // })
    cy.get('#view-as-tenant-select').find('option').then(listLength => {
        if (listLength.length == listLength.length) {
            cy.log('The number of the list is: ' + listLength.length)
        }
        //cy.get('#view-as-tenant select').find('option').its('length').should('have.length', listLength)
    })

    //cy.get('#view-as-tenant-select').find('option').should('have.length',109)
})

// And("I select child tenant ", () => {
//     //TEA Living
//     cy.get('#navbar-list-tenant').select('Zenfuel')
//     cy.wait(500)
// })
