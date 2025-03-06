describe('Cart Page', () => {
    it('Add products to the basket and check their properties.', () => {
        cy.visit('https://sweetshop.netlify.app/');
        cy.get('a.btn').contains('Browse Sweets').should('be.visible').click();

        cy.get('a[data-id="1"]').click();
        cy.get('a[data-id="5"]').click();
        cy.get('a[data-id="9"]').click();
        cy.get('a[data-id="11"]').click();

        cy.get('.nav-link').contains('Basket').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
    
        cy.get('#basketCount').should('have.text','4');

        cy.get('.list-group-item').eq(0).contains('Swansea Mixture').should('be.visible');
        cy.get('.list-group-item').eq(1).contains('Sweet Whistle').should('be.visible');
        cy.get('.list-group-item').eq(2).contains('Chocolate Cups').should('be.visible');
        cy.get('.list-group-item').eq(3).contains('Jellies').should('be.visible');

        cy.get('span.text-muted').eq(1).contains('£1.50').should('be.visible');
        cy.get('span.text-muted').eq(2).contains('£0.25').should('be.visible');
        cy.get('span.text-muted').eq(3).contains('£1.00').should('be.visible');
        cy.get('span.text-muted').eq(4).contains('£0.75').should('be.visible');

        cy.get('small.text-muted').eq(0).contains('x 1').should('be.visible');
        cy.get('small.text-muted').eq(1).contains('x 1').should('be.visible');
        cy.get('small.text-muted').eq(2).contains('x 1').should('be.visible');
        cy.get('small.text-muted').eq(3).contains('x 1').should('be.visible');

        cy.get('a.small').eq(0).contains('Delete Item').should('be.visible');
        cy.get('a.small').eq(1).contains('Delete Item').should('be.visible');
        cy.get('a.small').eq(2).contains('Delete Item').should('be.visible');
        cy.get('a.small').eq(3).contains('Delete Item').should('be.visible');

        cy.get('.list-group-item').eq(4).contains('Total (GBP)').should('be.visible');
        cy.get('.list-group-item').eq(4).contains('£3.50').should('be.visible');

        cy.get('.input-group').eq(1).contains('Empty Basket').should('be.visible');
        cy.get('.input-group').eq(1).contains('Empty Basket').click();

        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Are you sure you want to empty your basket?');
            return true;
          });

          cy.get('#basketCount').should('have.text','0');
          cy.get('.list-group-item').eq(0).contains('Total (GBP)').should('be.visible');
          cy.get('.list-group-item').eq(0).contains('£0.00').should('be.visible');

    });
 

});