describe('Login', () => {

  it('1. Visit Sweet Shop', () => {
    cy.visit('https://sweetshop.netlify.app/')
    cy.get('.nav-link').contains('Login').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/login');
  });

  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/login')
  });

  it('2. Login successfully', () => {
    cy.get('#exampleInputEmail').click().type('test@example.com');
    cy.get('#exampleInputPassword').click().type('1234');

    cy.get('button[type="submit"]').click();

    cy.contains('Welcome back test@user.com').should('be.visible');
  });

  it('3. Login unsuccessfully', () => {
    cy.get('#exampleInputEmail').click();
    cy.get('#exampleInputPassword').click();

    cy.get('button[type="submit"]').click();

    cy.contains('Please enter a valid email address.').should('be.visible');
    cy.contains('Please enter a valid password.').should('be.visible');
  });



});