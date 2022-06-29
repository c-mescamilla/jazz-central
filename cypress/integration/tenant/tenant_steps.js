import { Assertion } from "chai";
import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import tenantPage from '../pageObjects/tenantPage'

And("I click on tenant dropdown", () => {
    tenantPage.selectParentTenant()
})

And("I select a child tenant from the parent tenant group", () => {
    tenantPage.selectChildTenant()
})

