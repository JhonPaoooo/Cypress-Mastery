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
import { exercise } from '../support/exercise.js'
import { payment } from '../support/payment.js'
import { signup } from '../support/signup.js'
import { signlog } from '../support/signlog.js'
import RegistrationPage from './pages/parabank/registration.page.js';
import SignupPage from './pages/automation-exercise/signup.page.js';
import CartPage from "./pages/automation-exercise/addtocart.page.js";
import CheckPage from './pages/automation-exercise/checkout.page.js'

//SAUCE DEMO
Cypress.Commands.add('authSauceDemo', (userNAme, passWOrd) => {
  cy.get('[data-test="username"]').type(userNAme)
  cy.get('[data-test="password"]').type(passWOrd)
  cy.get('[data-test="login-button"]').click()

})
Cypress.Commands.add('cartAdd', () => { 
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

// Cypress.Commands.add('fakers', () => { 
//     const user = createUser()
//     cy.writeFile('cypress/fixtures/testingData.json', user);
//   cy.get('input[id="customer.firstName"').type(user.firstName)
//   cy.get('input[id="customer.lastName"').type(user.lastName)
//   cy.get('input[id="customer.address.street"').type(user.street)
//   cy.get('input[id="customer.address.city"').type(user.city)
//   cy.get('input[id="customer.address.state"').type(user.state)
//   cy.get('input[id="customer.address.zipCode"').type(user.zipCode)
//   cy.get('input[id="customer.phoneNumber"').type(user.phoneNumber)
//   cy.get('input[id="customer.ssn"').type(user.ssn)
//   cy.get('input[id="customer.username"').type(user.username)
//   cy.get('input[id="customer.password"').type(user.password)
//   cy.get('input[id="repeatedPassword"').type(user.password)
//   cy.get('input[type="submit"][value="Register"]').click()
// });

// Cypress.Commands.add('confirm', (luserName, lpassWord) => { 
//   cy.get('form > :nth-child(2) > .input').type(luserName)
//   cy.get(':nth-child(4) > .input').type(lpassWord)
// });
Cypress.Commands.add('saveCart', () => {
  cy.window().then((win) => {
    const cart = win.localStorage.getItem('cart-contents') || '[]';
    Cypress.env('savedCart', cart);
  });
});

Cypress.Commands.add('restoreCart', () => {
  const cart = Cypress.env('savedCart') || '[]';
  cy.window().then((win) => {
    win.localStorage.setItem('cart-contents', cart);
  });
});

// Cypress.Commands.add('addToCart', () =>{
//   cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
//             cy.get('.modal-footer > .btn').should('be.visible')
//             cy.get('.modal-footer > .btn').click()
//             cy.get('.shop-menu > .nav > :nth-child(3)').click()
          
// })
Cypress.Commands.add('checkOut', ()=>{
            cy.get('.col-sm-6 > .btn').click()
            cy.get('.modal-footer > .btn').should('be.visible')
            cy.get('.modal-footer > .btn').click()
})

  //Used in TC14_Register-while-Checkout.cy.js
  Cypress.Commands.add('registration', () => {
    const activity = exercise(); // Ensure exercise() is properly defined
    
    cy.get('[data-qa="signup-name"]')
      .should('be.visible')
      .type(activity.name)
      .should('have.value', activity.name);
  
    cy.get('[data-qa="signup-email"]')
      .should('be.visible')
      .type(activity.emailAddress)
      .should('have.value', activity.emailAddress);
  
    cy.get('[data-qa="signup-button"]')
      .should('be.visible')
      .click();
  
    cy.get('#id_gender1')
      .should('be.visible')
      .click()
      .should('be.checked');
  
    cy.get('[data-qa="password"]')
      .should('be.visible')
      .type(activity.password)
      .should('have.value', activity.password);
  
    cy.get('[data-qa="days"]')
      .should('be.visible')
      .select(activity.day.toString())
      .should('have.value', activity.day.toString());
  
    cy.get('[data-qa="months"]')
      .should('be.visible')
      .select(activity.month)
      .should('have.value', activity.month);
  
    cy.get('[data-qa="years"]')
      .should('be.visible')
      .select(activity.year.toString())
      .should('have.value', activity.year.toString());
  
    cy.get('#newsletter')
      .should('be.visible')
      .click()
      .should('be.checked');
  
    cy.get('[data-qa="first_name"]')
      .should('be.visible')
      .type(activity.firstName)
      .should('have.value', activity.firstName);
  
    cy.get('[data-qa="last_name"]')
      .should('be.visible')
      .type(activity.lastName)
      .should('have.value', activity.lastName);
  
    cy.get('[data-qa="company"]')
      .should('be.visible')
      .type(activity.company)
      .should('have.value', activity.company);
  
    cy.get('[data-qa="address"]')
      .should('be.visible')
      .type(activity.address)
      .should('have.value', activity.address);
  
    cy.get('[data-qa="address2"]')
      .should('be.visible')
      .type(activity.address)
      .should('have.value', activity.address);
  
      const countryMapping = { //This is an object (dictionary) that maps numeric values (1–7) to their respective country names.
      //It ensures that when a number (like 3) is generated, it correctly translates to "Canada", instead of causing Cypress to look for an invalid option.
        
        1: "India",
        2: "United States",
        3: "Canada",
        4: "Australia",
        5: "Israel",
        6: "New Zealand",
        7: "Singapore"
      };
      
      const selectedCountry = countryMapping[activity.country]; // Convert number to country name
      
      cy.get('[data-qa="country"]') // Finds the dropdown element on the page.
        .should('be.visible') // Ensures the dropdown is visible before interacting with it
        .select(selectedCountry) // Chooses the mapped country name (e.g., "Australia" instead of 4).
        .should('have.value', selectedCountry); // Verifies that the selected value matches what we expect.

  
    cy.get('[data-qa="state"]')
      .should('be.visible')
      .type(activity.state)
      .should('have.value', activity.state);
  
    cy.get('[data-qa="city"]')
      .should('be.visible')
      .type(activity.city)
      .should('have.value', activity.city);
  
    cy.get('[data-qa="zipcode"]')
      .should('be.visible')
      .type(activity.zipCode)
      .should('have.value', activity.zipCode);
  
    cy.get('[data-qa="mobile_number"]')
      .should('be.visible')
      .type(activity.phoneNumber)
      .should('have.value', activity.phoneNumber);
  });
  //Used in TC14, TC15, and TC16
Cypress.Commands.add('pay', ()=>{
  const method = payment()
            cy.get('[data-qa="name-on-card"]').type(method.nameCard)
            cy.get('[data-qa="card-number"]').type(method.cardNumber)
            cy.get('[data-qa="cvc"]').type(method.cvc)
            cy.get('[data-qa="expiry-month"]').type(method.exp)
            cy.get('[data-qa="expiry-year"]').type(method.expy)
})

  //Used in TC15_Register-before-Checkout
// Cypress.Commands.add('sign', ()=>{
//   const upsign = signup()
//             cy.get('[data-qa="signup-name"]').type(upsign.name);
//             cy.get('[data-qa="signup-email"]').type(upsign.emailAddress);
//             cy.get('[data-qa="signup-button"]').click();
//             cy.get('#id_gender1').click()
//             cy.get('[data-qa="password"]').type(upsign.password)
//             cy.get('[data-qa="days"]').select(upsign.day);
//             cy.get('[data-qa="months"]').select(upsign.month);
//             cy.get('[data-qa="years"]').select(upsign.year);
//             cy.get('#newsletter').click()
//             cy.get('[data-qa="first_name"]').type(upsign.firstName);
//             cy.get('[data-qa="last_name"]').type(upsign.lastName);
//             cy.get('[data-qa="company"]').type(upsign.company);
//             cy.get('[data-qa="address"]').type(upsign.address);
//             cy.get('[data-qa="address2"]').type(upsign.address);
//             cy.get('[data-qa="country"]').select(upsign.country);
//             cy.get('[data-qa="state"]').type(upsign.state);
//             cy.get('[data-qa="city"]').type(upsign.city);
//             cy.get('[data-qa="zipcode"]').type(upsign.zipCode);
//             cy.get('[data-qa="mobile_number"]').type(upsign.phoneNumber);
// })
Cypress.Commands.add('fillRegistrationForm', (customerData = createUser()) => {
  RegistrationPage.fillSignUpForm(customerData);
  RegistrationPage.submitSignUpForm();
  RegistrationPage.verifySignUpSuccess(customerData.username);
});
Cypress.Commands.add('fillSignupForm', () => {
  SignupPage.fillSignupForm();
  // SignupPage.login();

});
Cypress.Commands.add('login', (login = signup()) => {
  SignupPage.login(login);
  // SignupPage.login();

});
Cypress.Commands.add('login', (login = signup()) => {
  SignupPage.login(login);
  // SignupPage.login();

});
Cypress.Commands.add("addcart", () => {
  CartPage.addcart();
  CartPage.verifyCartPage()
});
Cypress.Commands.add("verifyCheckoutDetails", () => {
  CheckPage.verifyCheckoutDetails();
});








  



