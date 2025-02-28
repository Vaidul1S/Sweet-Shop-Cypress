describe('Sweet Shop Home Page and Navigation', () => {

    it('Home Page', () => {
      cy.visit('https://sweetshop.netlify.app/');
      cy.get('.display-3').contains('Welcome to the sweet shop!').should('be.visible');
      cy.get('nav.navbar').should('be.visible');
    });

    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
    });

    it('Navigation routes Sweets', () => {
        cy.get('.nav-link').contains('Sweets').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
    });
  
    it('Navigation routes About', () => {
        cy.get('.nav-link').contains('About').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/about');
    });

    it('Navigation routes Login', () => {
        cy.get('.nav-link').contains('Login').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/login');
    });

    it('Navigation routes Basket', () => {
        cy.get('.nav-link').contains('Basket').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
    });
    
  
  });