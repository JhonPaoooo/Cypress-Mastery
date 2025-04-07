describe('login test suite', () => {          // describe block - test suite or collection of test cases
  it('Valid Credentials', () => {                     // it block - test case
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.contains('Swag Labs').should('be.visible')  //assert - should or expected result
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', 'inventory')
  })
  it('Invalid Credentials', () =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_use")
    cy.get('[data-test="password"]').type("secret_sauc")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})

