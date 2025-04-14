
import { signlog } from '../support/signlog.js'


describe('Verify Register while checkout', ()=> {
    const logsign = signlog()
    before(() => {
        cy.visit('http://automationexercise.com');
        cy.get('.fa.fa-lock').click()
        //FAKERS
        cy.get('[data-qa="signup-name"]').type(logsign.name);
        cy.get('[data-qa="signup-email"]').type(logsign.emailAddress);
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type(logsign.password)
        cy.get('[data-qa="days"]').select(logsign.day);
        cy.get('[data-qa="months"]').select(logsign.month);
        cy.get('[data-qa="years"]').select(logsign.year);
        cy.get('#newsletter').click()
        cy.get('[data-qa="first_name"]').type(logsign.firstName);
        cy.get('[data-qa="last_name"]').type(logsign.lastName);
        cy.get('[data-qa="company"]').type(logsign.company);
        cy.get('[data-qa="address"]').type(logsign.address);
        cy.get('[data-qa="address2"]').type(logsign.address);
        cy.get('[data-qa="country"]').select(logsign.country);
        cy.get('[data-qa="state"]').type(logsign.state);
        cy.get('[data-qa="city"]').type(logsign.city);
        cy.get('[data-qa="zipcode"]').type(logsign.zipCode);
        cy.get('[data-qa="mobile_number"]').type(logsign.phoneNumber);
        cy.get('[data-qa="create-account"]').click()
    });
    it('Verify user should be redirected to the website',() =>{
        cy.visit('http://automationexercise.com');
        cy.get('.active > :nth-child(1) > h1 > span').should('be.visible')
        .and('contain', 'Automation')
        // Verify that home page is visible successfully
        cy.get('.shop-menu > .nav > :nth-child(1) > a').should('contain', 'Home')

        // Click login and sign up button
        cy.get('.fa.fa-lock').click()

        // Fill email, password and click 'Login' button
        cy.get('[data-qa="login-email"]').type(logsign.emailAddress)
        cy.get('[data-qa="login-password"]').type(logsign.password)
        cy.get('[data-qa="login-button"]').click()

        // Verify ' Logged in as username' at top
        cy.get(':nth-child(10) > a').should('be.visible').and('contain', 'Logged in as')

        // Add products to cart
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').should('contain', 'Continue Shopping')
        cy.get('.modal-footer > .btn').click()

        // Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

        // Verify that cart page is displayed
        cy.get('.image').should('be.visible')
        cy.get('.quantity').should('be.visible')

        // Click Proceed To Checkout
        cy.get('.col-sm-6 > .btn').click()
        cy.url().should('include', 'checkout')

        // Verify Address Details and Review Your Order
        cy.get(':nth-child(2) > .heading').should('be.visible').and('contain', 'Address Details')
        cy.get(':nth-child(4) > .heading').should('be.visible').and('contain', 'Review Your Order')

        // Enter description in comment text area and click 'Place Order'
        cy.get('.form-control').type('Success')
        cy.get(':nth-child(7) > .btn').click()
        cy.url().should('include', 'payment')

        // Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.pay()
        
        // Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click()
        // cy.get('#success_message > .alert-success', { timeout: 10000 }).should('be.visible')

        // Verify success message 'Your order has been placed successfully!'
        cy.get('[data-qa="order-placed"] > b').should('contain', 'Order Placed!')
        cy.get('.col-sm-9 > p').should('be.visible').and('contain', 'Congratulations! Your order has been confirmed!')

        // Click 'Delete Account' button
        cy.get('.nav > :nth-child(5)').should('be.visible').and('contain', 'Delete Account')
        cy.get('.nav > :nth-child(5)').click()
        cy.url().should('include', 'delete_account')
        
        // Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('contain', 'Your account has been permanently deleted!')
        cy.get('[data-qa="continue-button"]').click()
        cy.url().should('include', 'automationexercise')    
    });  
    }); 