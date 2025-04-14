
    // Test Case 1
    it('Verify launching browser', () => {
        cy.visit('https://www.google.com');
    });

describe('Verify Register while checkout', ()=> {
    beforeEach(() => {
        cy.visit('http://automationexercise.com');
    });

    // Test Case 2
    it('Verify user should be redirected to the website',() =>{
        cy.visit('http://automationexercise.com');
        cy.get('.active > :nth-child(1) > h1 > span').should('be.visible')
        .and('contain', 'Automation')
    });
    // Test Case 3
    it('Verify home page is visible successfully',() =>{
        cy.visit('http://automationexercise.com');
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('contain', 'Home')
    });
    // Test Case 4
    it('Verify user should be able to add a products on the cart', ()=>{
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').should('be.visible')
        cy.get('.modal-footer > .btn').click()
//         cy.get('a[href="/view.cart"]')
//   .invoke('attr', 'href')
//   .then((href) => {
//     cy.visit(href); // Navigate to the extracted URL
    });
    // Test Case 5
    it('Verify user should be able to redirect to Cart page', ()=>{
        cy.addToCart()  
    });
    // Test Case 6
    it('Verify that cart page is displayed', ()=>{
        cy.addToCart()
        cy.get('.cart_quantity').should('be.visible')
        cy.get('.cart_total').should('be.visible')
        cy.url().should('include', 'view_cart')
    });
    // Test Case 7
    it('Verify proceed to checkout', ()=>{
        cy.addToCart() 
        cy.checkOut()
    });
    // Test Case 8
    it('Verify clicking Register/Login button', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.url().should('include', 'login')
    });
    // Test Case 9
    it('Verify filling details in Signup and create account', ()=>{
        // const activity = exercise()
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.url().should('include', 'signup')
        cy.get('[data-qa="create-account"]').click()
        // cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        // cy.get('[data-qa="continue-button"]').click()
        // cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain', 'Logout')
    });
    // Test Case 10
    it('Verify account created and click "Continue" button', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.url().should('include', 'signup')
        cy.get('[data-qa="create-account"]').click()
        cy.url().should('include', 'account_created')
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain', 'Logout')
    });
    // Test Case 11
    it('Verify Logged in as username at top', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.url().should('include', 'automationexercise')
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
    });
    // Test Case 12
    it('Verify clicking cart button when logged in', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
    });
    // Test Case 13
    it('Verify clicking "Proceed to Checkout" button when logged in', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.url().should('include', 'checkout')
    });
    // Test Case 14
    it('Verify "Address Details" and "Review Your Order"', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.url().should('include', 'checkout')
        cy.get(':nth-child(2) > .heading').should('contain', 'Address Details')
        cy.get(':nth-child(4) > .heading').should('contain', 'Review Your Order')
    });
    // Test Case 15
    it('Verify entering a description in comment text area and click "Place Order', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("Successful")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('.heading').should('contain', 'Payment')
    });
    // Test Case 16
    it('Verify entering a payment details: "Name on Card", "Card Number", "CVC", "Expiration Date"', ()=>{
        cy.addToCart() 
        cy.checkOut()
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("Successful")
        cy.get(':nth-child(7) > .btn').click()
        cy.url().should('include', 'payment')
        cy.get('.heading').should('contain', 'Payment')
        cy.pay()
    });
    // Test Case 17
    it('Verify clicking "Pay and Confirm Order" button', ()=>{
        cy.addToCart() 
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > h2').should('contain', 'Login to your account')
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("Successful")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('.heading').should('contain', 'Payment')
        cy.pay()
        cy.wait(5000)
        cy.get('[data-qa="pay-button"]').click()
        cy.url().should('include', 'payment_done')
        cy.get('[data-qa="order-placed"] > b').should('contain', 'Order Placed!')
    });
    // Test Case 18
    it('Verify success message "Your order has been placed successfully!"', ()=>{
        cy.addToCart() 
        cy.get(':nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.registration()
        cy.get('[data-qa="create-account"]').click()
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("Successful")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('.heading').should('contain', 'Payment')
        cy.pay()
        cy.wait(5000)
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"] > b').should('contain', 'Order Placed!')
        cy.get('.col-sm-9 > p').should('be.visible').and('contain', 'Congratulations! Your order has been confirmed!')
    });
    // Test Case 19
    it('Verify clicking "Delete Account" button', ()=>{
      cy.addToCart() 
      cy.get(':nth-child(4) > a').click()
      cy.get('.signup-form > h2').should('contain', 'New User Signup!')
      cy.registration()
      cy.get('[data-qa="create-account"]').click()
      cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
      cy.get('[data-qa="continue-button"]').click()
      cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
      cy.get('.shop-menu > .nav > :nth-child(3)').click()
      cy.get('.col-sm-6 > .btn').click()
      cy.get('.form-control').type("Successful")
      cy.get(':nth-child(7) > .btn').click()
      cy.get('.heading').should('contain', 'Payment')
      cy.pay()
      cy.wait(5000)
      cy.get('[data-qa="pay-button"]').click()
      cy.get('[data-qa="order-placed"] > b').should('contain', 'Order Placed!')
      cy.get('.nav > :nth-child(5)').should('be.visible').and('contain', 'Delete Account')
      cy.get('.nav > :nth-child(5)').click()
      cy.url().should('include', 'delete_account')
    });
    // Test Case 20
    it('Verify "ACCOUNT DELETED!"! and click "Continue" button', ()=>{
      cy.addToCart() 
      cy.get(':nth-child(4) > a').click()
      cy.get('.signup-form > h2').should('contain', 'New User Signup!')
      cy.registration()
      cy.get('[data-qa="create-account"]').click()
      cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Congratulations! Your new account has been successfully created!')
      cy.get('[data-qa="continue-button"]').click()
      cy.get(':nth-child(10) > a').should('contain', 'Logged in as')
      cy.get('.shop-menu > .nav > :nth-child(3)').click()
      cy.get('.col-sm-6 > .btn').click()
      cy.get('.form-control').type("Successful")
      cy.get(':nth-child(7) > .btn').click()
      cy.get('.heading').should('contain', 'Payment')
      cy.pay()
      cy.wait(5000)
      cy.get('[data-qa="pay-button"]').click()
      cy.get('[data-qa="order-placed"] > b').should('contain', 'Order Placed!')
      cy.get('.nav > :nth-child(5)').should('be.visible').and('contain', 'Delete Account')
      cy.get('.nav > :nth-child(5)').click()
      cy.url().should('include', 'delete_account')
      cy.get('b').should('be.visible').and('contain','Account Deleted!')
      cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('contain', 'Your account has been permanently deleted!')
      cy.get('[data-qa="continue-button"]').click()
      cy.url().should('include', 'automationexercise')
    });
    });
  

   




