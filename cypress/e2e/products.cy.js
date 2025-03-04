describe('Products', () => {
    it('1. Product Page', () => {
        cy.visit('https://sweetshop.netlify.app/');
        cy.get('a.btn').contains('Browse Sweets').should('be.visible').click();
    });

    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/sweets');
    });

    it('2. Procuts have images', () => {
        cy.get('.card').each(($img) =>{
            cy.wrap($img).should('have.members','img.card-img-top');
        })
    });

});