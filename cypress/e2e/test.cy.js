describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('get').click();

    // Should be on a new URL which includes '/commands/querying'
    cy.url().should('include', '/commands/querying');

    // Header should contain 'Querying'
    cy.get('h1').should('contain', 'Querying');
  })
})