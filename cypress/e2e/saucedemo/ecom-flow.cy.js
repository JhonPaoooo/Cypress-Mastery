describe('E-Commerce Test Flow/Workflow', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.contains('Swag Labs').should('be.visible')  //assert - should or expected result
        cy.get('[data-test="login-button"]').click()
    });
  
    it('User should successfully login', () => {
        cy.url().should('include', 'inventory')
        // cy.screenshot()
        cy.takeScreenshot('login-success');
    });
  
    it('Should successfully add item to cart', () => {
      cy.cartAdd(); 
      cy.get('[data-test="shopping-cart-link"]')
    cy.takeScreenshot('adding-to-cart-success');
    });
  
    it('Should successfully checkout', () => {
      cy.checkout("john", "johnny", "8114")
      cy.get('[data-test="continue"]').click()
      cy.url().should('include', 'checkout-step-two.html')
      cy.get('[data-test="finish"]').click()
      cy.contains('Thank you for your order!').should('be.visible')
      cy.takeScreenshot('checkout-success');
    });
  });
  