describe('Sweet Shop', () => {

  it('Visit Sweet Shop', () => {
    cy.visit('https://sweetshop.netlify.app/')
  });

  it('Login', () => {
    cy.visit('https://sweetshop.netlify.app/');
    cy.get('.nav-link').contains('Login').click();

    cy.get('#exampleInputEmail').click().type('test@example.com');
    cy.get('#exampleInputPassword').click().type('1234');

    cy.get('button[type="submit"]').click();

    cy.contains('Welcome back test@user.com').should('be.visible');
  });


});