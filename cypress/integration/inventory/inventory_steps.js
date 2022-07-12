import { Given, And } from "cypress-cucumber-preprocessor/steps";
import inventoryPage from '../pageObjects/inventoryPage'


And("I check {string} tab option", (option) => {
    inventoryPage.elements.tab().contains(option).click()
})

And("I sort the items in ascending order in the {string} column", (sort) => {

    inventoryPage.elements.scroll().scrollTo(622, 0)
    inventoryPage.elements.sort().contains(sort).click()
    cy.wait(4000)
    inventoryPage.elements.sort_asc().contains(sort).click()
})

Then("I select the transfer button from the table", () => {
    cy.wait(5000)
    inventoryPage.elements.scroll().scrollTo(-622, 0)
    inventoryPage.elements.transfer().click()
})

And("I select {string} in the list from business type", (fromBusinessT) => {
    cy.wait(4000)
    inventoryPage.elements.fromBusiness().select(fromBusinessT)
    }) 

And("I select {string} in the list from business type", (toBusinessT) => {
    cy.wait(4000)
    inventoryPage.elements.toBusiness().select(toBusinessT)
    
}) 

Then("I click on the check box of the transfer column", () => {
    cy.wait(4000)
    inventoryPage.elements.checkBoxTransfer().click()
})

And("I click in preview button", () => {
    
})

And("I click on the send button to transfer the quantity of items", () => {
    
}) 



