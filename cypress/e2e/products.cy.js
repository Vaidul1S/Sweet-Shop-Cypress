describe('Products', () => {
    it('1. Product Page', () => {
        cy.visit('https://sweetshop.netlify.app/');
        cy.get('a.btn').contains('Browse Sweets').should('be.visible').click();
    });

    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/sweets');
    });

    it('2. Products have images', () => {
        cy.get('.card .card-img-top').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
    });

    it('3. Products have names', () => {
        cy.get('.card .card-title').each(($el) => {
            cy.wrap($el).should('be.visible').and('not.be.empty');
        });
    });

    it('4. Products have text', () => {
        cy.get('.card .card-text').each(($el) => {
            cy.wrap($el).should('be.visible').and('not.be.empty');
        });
    });

    it('5. Products have prices', () => {
        cy.get('.card .text-muted').each(($el) => {
            cy.wrap($el).should('be.visible').and('not.be.empty');
        });
    });

    it('6. Products have add to basket button', () => {
        cy.get('.card .addItem').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
    });
});