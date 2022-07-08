//import cypress from "cypress";
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../pageObjects/loginPage'

//enter credentias valids user and password
When('A user enter credentials', (table) => {
    table.hashes().forEach(element => {
        loginPage.typeUsername(element.username)
        loginPage.typePassword(element.password)
    });
})

//click on login button 
And("A user clicks on Login button", () => {
    loginPage.clickLogin()
})

//verify the title is visible
And("Verify that it is inside {string}", (ordersTitle) => {
    loginPage.elements.verifyTitle().should('contain', ordersTitle)
    cy.wait(3000)
})

//click on logout button 
Then("A user clicks on Logout button", () => {
    loginPage.clickLogout()
})

//clicks on Forgot password button
When('A user clicks on Forgot password button', () => {
    loginPage.clickResetBtn()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

//verify the title is visible
And('Verify user will {string} message', (textMessage) => {
    loginPage.elements.logoutMessage().should('contain', textMessage)
})

//enter email in forgot password
Then('A user enter email', (table) => {
    table.hashes().forEach(element => {
        loginPage.typeEmail(element.username)
    });
})

//click on reset button for send notification
And("A user clicks on Reset Password button", () => {
    loginPage.clickResetPasswordBtn() 
})

//verify the title is visible
And('Verify user receiving {string} message', (textMessage) => {
    loginPage.elements.resetSendMessage().should('contain', textMessage)
})