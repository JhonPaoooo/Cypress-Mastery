import { signup } from "../../signup";

class SignupPage {
  // Selectors
  name = '[data-qa="signup-name"]';
  emailAddress = '[data-qa="signup-email"]';
  emailLogin = '[data-qa="login-email"]';
  password = '[data-qa="password"]';
  passWord = '[data-qa="login-password"]';
  gender = '#id_gender1';
  day = '[data-qa="days"]';
  month = '[data-qa="months"]';
  years = '[data-qa="years"]';
  newsletter = '#newsletter';
  firstName = '[data-qa="first_name"]';
  lastName = '[data-qa="last_name"]';
  company = '[data-qa="company"]';
  address = '[data-qa="address"]';
  address2 = '[data-qa="address2"]';
  country = '[data-qa="country"]';
  state = '[data-qa="state"]';
  city = '[data-qa="city"]';
  zipCode = '[data-qa="zipcode"]';
  pnumber = '[data-qa="mobile_number"]';
  signupbutton = '[data-qa="signup-button"]';

  // ✅ Corrected: Fill Signup Form
  fillSignupForm() {
    const userData = signup(); // Generate dynamic user data

    cy.get(this.name).should('be.visible').type(userData.firstName);
    cy.get(this.emailAddress).should('be.visible').type(userData.emailAddress);
    cy.get(this.signupbutton).click();
    cy.get(this.password).should('be.visible').type(userData.password);

    cy.get(this.gender).click();
    cy.get(this.day).should('be.visible').select(userData.day);
    cy.get(this.month).should('be.visible').select(userData.month);
    cy.get(this.years).should('be.visible').select(userData.year);
    cy.get(this.newsletter).click();
    cy.get(this.firstName).should('be.visible').type(userData.firstName);
    cy.get(this.lastName).should('be.visible').type(userData.lastName);
    cy.get(this.company).should('be.visible').type(userData.company);
    cy.get(this.address).should('be.visible').type(userData.address);
    cy.get(this.address2).should('be.visible').type(userData.address);
    cy.get(this.country).should('be.visible').select(userData.country);
    cy.get(this.state).should('be.visible').type(userData.state);
    cy.get(this.city).should('be.visible').type(userData.city);
    cy.get(this.zipCode).should('be.visible').type(userData.zipCode);
    cy.get(this.pnumber).should('be.visible').type(userData.phoneNumber);

    // ✅ Correctly Store Data for Checkout Validation
    Cypress.env("signupData", userData);
  }

  // ✅ Corrected: Login Method
  login() {
    cy.get(this.emailLogin).type(Cypress.env("signupData").emailAddress);
    cy.get(this.passWord).type(Cypress.env("signupData").password);
  }

  // ✅ Corrected: Verify Successful Signup
  verifySignUpSuccess() {
    cy.get('.welcome-message').should('contain.text', `Welcome ${Cypress.env("signupData").firstName}`);
  }
}

// ✅ Correctly Export the Class
export default new SignupPage();