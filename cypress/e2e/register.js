import '@testing-library/cypress/add-commands'

import { userBuilder } from '../support/generate'

describe('registration', () => {
  it('should register a new user', () => {
    const user = userBuilder()
    cy.visit('/')
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByText(/submit/i).click()
    cy.assertLoggedInAs(user)
  })

  it(`should show an error message if there's an error registering`, () => {
    cy.visit('/')
    cy.findByLabelText(/username/i).type('err')
    cy.findByLabelText(/password/i).type('err')
    cy.findByText(/submit/i).click()
    cy.findByText(/error.*try again/i)
  })
})
