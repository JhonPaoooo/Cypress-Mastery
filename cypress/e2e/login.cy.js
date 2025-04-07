describe('template spec', () => {          // describe block - test suite or collection of test cases
  it('passes', () => {                     // it block - test case
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.contains('Swag Labs').should('be.visible')  //assert - should or expected result
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', 'inventory')
  })
})

