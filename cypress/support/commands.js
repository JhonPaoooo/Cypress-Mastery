// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('auth', (username, password) => { // FUNCTION OR METHOD --> Then i-call natin sya sa spec or test file natin.
//     cy.visit('https://www.saucedemo.com/', {timeout: 240000})
//       cy.get('[data-test="username"]').type(username)
//       cy.get('[data-test="password"]').type(password)
//       cy.get('[data-test="login-button"]').click()
// });
import { createUser } from './utils.js'
//SAUCE DEMO
Cypress.Commands.add('addToCart', () => { 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
});
// PARABANK - Manually Clear Database
Cypress.Commands.add('clearDB', () => { 
  cy.get('.leftmenu > :nth-child(6) > a').click()
  cy.wait(1500)
  cy.get('tr > :nth-child(2) > .button').click()
  cy.wait(1500)
  cy.get(':nth-child(1) > .button').click()
  cy.wait(1500)
  cy.get('#rightPanel > p > b').should('contain', 'Database Initialized')
  cy.wait(1500)
  cy.get('#loginPanel > :nth-child(3) > a').click()


});
// SAUCE DEMO
Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => { 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
});
// Dynamic Screenshot
Cypress.Commands.add('takeScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:]/g, '-');
  cy.screenshot(`${name}-${timestamp}`);
});

//Fixtures - PARABANK - Registration
Cypress.Commands.add('register', () => { 
  cy.fixture('credentials').then((credential) => {
    // const credential = dential[1];
  cy.get('input[id="customer.firstName"').type(credential.firstname)
  cy.get('input[id="customer.lastName"').type(credential.lastname)
  cy.get('input[id="customer.address.street"').type(credential.street)
  cy.get('input[id="customer.address.city"').type(credential.city)
  cy.get('input[id="customer.address.state"').type(credential.state)
  cy.get('input[id="customer.address.zipCode"').type(credential.zipcode)
  cy.get('input[id="customer.phoneNumber"').type(credential.number)
  cy.get('input[id="customer.ssn"').type(credential.ssn)
  cy.get('input[id="customer.username"').type(credential.userName)
  cy.get('input[id="customer.password"').type(credential.passWord)
  cy.get('input[id="repeatedPassword"').type(credential.passWord)
  cy.get('input[type="submit"][value="Register"]').click()
  cy.wait(2000);
});
});

//Fakers - PARABANK - Registration
Cypress.Commands.add('fakers', () => { 
    const user = createUser()
    cy.writeFile('cypress/fixtures/testData.json', user);
  cy.get('input[id="customer.firstName"').type(user.firstName)
  cy.get('input[id="customer.lastName"').type(user.lastName)
  cy.get('input[id="customer.address.street"').type(user.street)
  cy.get('input[id="customer.address.city"').type(user.city)
  cy.get('input[id="customer.address.state"').type(user.state)
  cy.get('input[id="customer.address.zipCode"').type(user.zipCode)
  cy.get('input[id="customer.phoneNumber"').type(user.phoneNumber)
  cy.get('input[id="customer.ssn"').type(user.ssn)
  cy.get('input[id="customer.username"').type(user.username)
  cy.get('input[id="customer.password"').type(user.password)
  cy.get('input[id="repeatedPassword"').type(user.password)
  cy.get('input[type="submit"][value="Register"]').click()
});

// Cypress.Commands.add('confirm', (luserName, lpassWord) => { 
//   cy.get('form > :nth-child(2) > .input').type(luserName)
//   cy.get(':nth-child(4) > .input').type(lpassWord)
// });



