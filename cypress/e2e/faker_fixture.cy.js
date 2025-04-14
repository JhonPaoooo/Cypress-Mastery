import { faker } from '@faker-js/faker';
describe('Registration', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    });

    //Fakers - PARABANK - Calling the registration from commands.js
    it('User should able to register', () => {
        cy.clearDB()
        // cy.clearAllCookies()
        // cy.clearLocalStorage()
        cy.fakers()
        cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')
        // cy.takeScreenshot('registration-success');
    });

    //Fakers with the use of fixtures calling the testData file in command.js
    it('User should able to logout', () => {
            cy.fixture('testingData').then((testingData) => {
                cy.get('form > :nth-child(2) > .input').type(testingData.username)
                cy.get('form > :nth-child(4) > .input').type(testingData.password)
                cy.get(':nth-child(5) > .button').click()
                // cy.get(':nth-child(5) > .button').click()
        // cy.takeScreenshot('logout-success');
    });
});

    //Fakers with the use of fixtures calling the testData file in command.js
    it('User should able to login', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
        cy.fixture('testingData').then((testingData) => {
        cy.get('form > :nth-child(2) > .input').type(testingData.username)
        cy.get('form > :nth-child(4) > .input').type(testingData.password)
        cy.get(':nth-child(5) > .button').click()
        // cy.takeScreenshot('login-is-success');
    });
});
});




