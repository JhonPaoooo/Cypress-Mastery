describe('Registration', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        
    });

    it('User should able to register', () => {
        cy.url().should('contain', 'register')
        cy.register()
        cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')
        // cy.takeScreenshot('registration-success');
    });
    it('User should able to logout', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
            cy.fixture('credentials').then((credential) => {
                cy.get('form > :nth-child(2) > .input').type(credential.userName)
                cy.get('form > :nth-child(4) > .input').type(credential.passWord)
                cy.get(':nth-child(5) > .button').click()
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
        // cy.takeScreenshot('logout-success');
    });
});
    it('User should able to login', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
        cy.fixture('credentials').then((credential) => {
            cy.get('form > :nth-child(2) > .input').type(credential.userName)
            cy.get('form > :nth-child(4) > .input').type(credential.passWord)
        cy.get(':nth-child(5) > .button').click()
        // cy.takeScreenshot('login-is-success');
    });
});
});



