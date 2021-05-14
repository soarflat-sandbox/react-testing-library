describe('Cypress', () => {
  it('is working', () => {
    cy.visit('/')
    cy.get('#root > :nth-child(3)').click().click().click()
    cy.get('[data-testid=result]').should('have.text', '3')
  })
})
