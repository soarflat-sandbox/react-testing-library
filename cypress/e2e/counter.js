import '@testing-library/cypress/add-commands'

describe('Cypress', () => {
  it('is working', () => {
    cy.visit('/')
    cy.findByText(/^\+/).click().click().click()
    cy.findByTestId('result').should('have.text', '3')
  })
})
