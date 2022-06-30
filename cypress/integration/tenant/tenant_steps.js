import { Assertion } from "chai";
import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import tenantPage from '../pageObjects/tenantPage'

//Validates the tree of elements 
And("I click on tenant dropdown", () => {
    tenantPage.selectParentTenant()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

//Validates the selection of child tenants
And("I select a child tenant from the parent tenant group", () => {
    tenantPage.selectChildTenant()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

