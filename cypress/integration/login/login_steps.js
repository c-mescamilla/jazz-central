import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../pageObjects/loginPage'

When('A user enter credentials', (table) => {
    table.hashes().forEach(element => {
        loginPage.typeUsername(element.username)
        loginPage.typePassword(element.password)
    });
})

And("A user clicks on Login button", () => {
    loginPage.clickLogin()
})

And("Verify that it is inside {string}", (ordersTitle) => {
    loginPage.elements.verifyTitle().should('contain', ordersTitle)
})

Then("A user clicks on Logout button", () => {
    loginPage.clickLogout()
})


When('A user clicks on Forgot password button', () => {
    loginPage.clickResetBtn()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

And('Verify user will {string} message', (textMessage) => {
    loginPage.elements.logoutMessage().should('contain', textMessage)
})

Then('A user enter email', (table) => {
    table.hashes().forEach(element => {
        loginPage.typeEmail(element.username)
    });
})

And("A user clicks on Reset Password button", () => {
    loginPage.clickResetPasswordBtn()
})

And('Verify user receiving {string} message', (textMessage) => {
    loginPage.elements.resetSendMessage().should('contain', textMessage)
})