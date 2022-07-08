import { Given, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../pageObjects/loginPage'
import pagesCommon from '../common/pagesCommon'
import tenantPage from '../pageObjects/tenantPage'

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

//click on the main menu
When("A user clicks on the {string} menu", (menu) => {
    pagesCommon.elements.menuList().contains(menu).click()
})

//click on the first submenu
And("A user clicks on the {string} submenu", (submenu) => {
    pagesCommon.elements.secondmenuList().contains(submenu).click()
})

//click on the send subsubmenu if it exists
And("A user clicks on the {string} sub-submenu", (submenu) => {
    pagesCommon.elements.thirdmenuList().contains(submenu).click()
})

//select a tenant to load the view 
And("I select the {string} in the list", (tenant) => {
    pagesCommon.selectSpecificTenant(tenant)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

