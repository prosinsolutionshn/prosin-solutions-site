describe('Home Page', () => {
  it('should render the greeting', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Get started by editing app/page.tsx');
  });
});
