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

Cypress.Commands.add('addToCart', () => { 
    // cy.get('[data-test="inventory-item-name"]') // Selects product names
    // .contains("Sauce Labs Backpack") // Finds the correct item by name
    // .parents(".inventory_item") // Moves up to the item's container
    // .find("button") // Locates the "Add to Cart" button
    // .click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    // //   cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
    // //   cy.contains('[data-test="inventory-item-name"]').should('be.visible')
});
Cypress.Commands.add('takeDynamicScreenshot', (prefix) => {
  const date = new Date();
  const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  const screenshotName = `${prefix}-${formattedDate}.png`;
  
  cy.screenshot(screenshotName);
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => { 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
});

Cypress.Commands.add('takeScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:]/g, '-');
  cy.screenshot(`${name}-${timestamp}`);
});