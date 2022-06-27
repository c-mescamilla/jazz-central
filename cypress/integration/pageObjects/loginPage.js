class loginPage {

    elements = {
        usernameInput: () => cy.get('#id_username'),
        passwordInput: () => cy.get('#id_password'),
        loginBtn: () => cy.get('#login'),
        titleMessage: () => cy.get('div > h4'),
        verifyTitle: () => cy.get('#inner-page > div > div > h1'),
        logoutBtn: () => cy.get('#logout_topnav'),
        resetBtn: () => cy.get('#reset-password > small'),
        logoutMessage: () => cy.get('.login-logo'),
        emailInput: () => cy.get('.form-control'),
        resetPasswordBtn: () => cy.get('#resset-submit-btn'),
        resetSendMessage: () => cy.get('div > strong')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    typeEmail(email) {
        this.elements.emailInput().type(email)
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    clickLogout() {
        this.elements.logoutBtn().click();
    }

    clickResetBtn() {
        this.elements.resetBtn().click();
    }

    clickResetPasswordBtn() {
        this.elements.resetPasswordBtn().click();
    }
}
export default new loginPage();