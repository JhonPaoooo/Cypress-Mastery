class CartPage {
    addcart() {
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
        .should('be.visible')
        .click();
  
      cy.get('.modal-footer > .btn').should('be.visible').click();
      cy.get('.shop-menu > .nav > :nth-child(3)').click();
    }
  
    verifyCartPage() {
      cy.url().should("include", "cart");
      cy.get('.image').should('be.visible')
    cy.get('.quantity').should('be.visible')
    }
  }
  
  export default new CartPage();