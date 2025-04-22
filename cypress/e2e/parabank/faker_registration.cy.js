
import { testData } from '../../support/utility.js'

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')

    });
    const testdata = testData()
    it('User should able to register', () => {
        cy.url().should('contain', 'register')
        cy.get('#customer\\.firstName').type(testdata.firstName)
        cy.get('input[id="customer.lastName"').type(testdata.lastName)
        cy.get('input[id="customer.address.street"').type(testdata.address)
        cy.get('input[id="customer.address.city"').type(testdata.city)
        cy.get('input[id="customer.address.state"').type(testdata.state)
        cy.get('input[id="customer.address.zipCode"').type(testdata.zipCode)
        cy.get('input[id="customer.phoneNumber"').type(testdata.phoneNumber)
        cy.get('input[id="customer.ssn"').type(testdata.ssn)
        cy.get('input[id="customer.username"').type(testdata.username)
        cy.get('input[id="customer.password"').type(testdata.password)
        cy.get('input[id="repeatedPassword"').type(testdata.password)
        cy.get('input[type="submit"][value="Register"]').click()
        // cy.takeScreenshot('registration-success');
    });
    it('User should able to logout', () => {
        cy.url().should('contain', 'register')
        cy.get('form > :nth-child(2) > .input').type(testdata.username)
        cy.get('form > :nth-child(4) > .input').type(testdata.password)
        cy.get(':nth-child(5) > .button').click()
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
});
    it('User should able to login', () => {
        cy.url().should('contain', 'register')
        cy.get('form > :nth-child(2) > .input').type(testdata.username)
        cy.get('form > :nth-child(4) > .input').type(testdata.password)
        cy.get(':nth-child(5) > .button').click()
        cy.contains('Accounts Overview').should('be.visible')
});
});