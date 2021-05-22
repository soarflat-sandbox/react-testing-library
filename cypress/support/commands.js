Cypress.Commands.add('assertLoggedInAs', (user) => {
  cy.window().its('localStorage.token').should('be.a', 'string')
  cy.findByTestId('username-display').should('have.text', user.username)
})
