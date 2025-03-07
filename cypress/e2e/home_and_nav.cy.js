describe('Sweet Shop Home Page and Navigation', () => {

    it('1. Home Page', () => {
      cy.visit('https://sweetshop.netlify.app/');
      cy.get('.display-3').contains('Welcome to the sweet shop!').should('be.visible');
      cy.get('nav.navbar').should('be.visible');
    });

    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
    });

    it('2. Navigation route - Sweets', () => {
        cy.get('.nav-link').contains('Sweets').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
    });
  
    it('3. Navigation route - About', () => {
        cy.get('.nav-link').contains('About').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/about');
    });

    it('4. Navigation route - Login', () => {
        cy.get('.nav-link').contains('Login').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/login');
    });

    it('5. Navigation route - Basket', () => {
        cy.get('.nav-link').contains('Basket').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
    });

    it('6. Navigation route - Sweet Shop', () => {
        cy.get('.navbar-brand').contains('Sweet Shop').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/');
    });
    
  
  });