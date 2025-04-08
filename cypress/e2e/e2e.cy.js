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
        cy.takeDynamicScreenshot('login-success');
    });
  
    it('Should successfully add item to cart', () => {
      cy.addToCart(); // Custom Command for adding to cart
      cy.get('[data-test="shopping-cart-link"]')
    //   cy.screenshot()
    cy.takeDynamicScreenshot('adding-to-cart-success');
    });
  
    it('Should successfully checkout', () => {
         // Custom Command for checkout process
      cy.checkout("john", "johnny", "8114")
      cy.get('[data-test="continue"]').click()
      cy.url().should('include', 'checkout-step-two.html')
      cy.get('[data-test="finish"]').click()
      cy.contains('Thank you for your order!').should('be.visible')
      cy.takeDynamicScreenshot('checkout-success');
    //   cy.url().should('include', 'cart.html')
    
    //   cy.screenshot()
    //   cy.contains('Sauce Labs Backpack').should('be.visible')
  
    });
  });
  