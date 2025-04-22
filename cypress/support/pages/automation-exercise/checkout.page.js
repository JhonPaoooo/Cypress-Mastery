class CheckoutPage {
    verifyCheckoutDetails() {
      // Retrieve stored signup data
      const userData = Cypress.env("signupData");
  
      cy.get("#address_delivery > .address_title > .page-subheading").should("be.visible");
      cy.get("#address_invoice > .address_title > .page-subheading").should("be.visible");
      cy.get("#address_delivery > .address_firstname").should("contain", `Mr. ${userData.firstName} ${userData.lastName}`);
      cy.get('#address_delivery > :nth-child(3)').should("contain", userData.company);
      cy.get('#address_delivery > :nth-child(4)').should("contain", userData.address);
      cy.get('#address_delivery > :nth-child(5)').should("contain", userData.address);
      cy.get('#address_delivery > .address_city').should("contain", userData.city);
      // cy.get('#address_delivery > .address_country_name').should("contain", userData.country);
      cy.get('#address_delivery > .address_phone').should("contain", userData.phoneNumber);
      cy.get('#address_invoice > .address_firstname').should('contain', `Mr. ${userData.firstName} ${userData.lastName}`);
      cy.get('#address_invoice > :nth-child(3)').should("contain", userData.company);
      cy.get('#address_invoice > :nth-child(4)').should("contain", userData.address);
      cy.get('#address_invoice > :nth-child(5)').should("contain", userData.address);
      cy.get('#address_invoice > .address_city').should("contain", userData.city);
      // cy.get('#address_invoice > .address_country_name').should("contain", userData.country);
      cy.get('#address_invoice > .address_phone').should("contain", userData.phoneNumber);
    }
  }
  
  export default new CheckoutPage();