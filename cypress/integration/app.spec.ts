describe('App', () => {
  it('should navigate to localhost', () => {
    cy.visit('/');

    cy.url().should('include', 'http://localhost:5173/#/');
  });
});
