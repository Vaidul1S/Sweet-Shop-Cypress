describe('Checkout and Payment', () => {
    it('1. Filling checkout form successfully', () => {
        cy.visit('https://sweetshop.netlify.app/');
        cy.get('.nav-link').contains('Basket').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/basket');

        cy.get('.col-md-6 input').eq(0).click().type('Bebras');
        cy.get('.col-md-6 input').eq(1).click().type('Babrauskas');
        cy.get('#email').click().type('bebras@example.com');
        cy.get('#address').click().type('Rastu 11');
        cy.get('#address2').click().type('Bebriskes');
        cy.get('#country').select('United Kingdom');
        cy.get('#city').select('Bristol');
        cy.get('#zip').click().type('123456');
        cy.get('#cc-name').click().type('123456');
        cy.get('#cc-number').click().type('123456');
        cy.get('#cc-expiration').click().type('123456');
        cy.get('#cc-cvv').click().type('123456');

        cy.get('button').contains('Continue to checkout').click();
    });

    it('2. Filling checkout form unsuccessfully', () => {
        cy.visit('https://sweetshop.netlify.app/');
        cy.get('.nav-link').contains('Basket').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
     
        cy.get('button').contains('Continue to checkout').click();

        cy.get('.invalid-feedback').eq(1).contains('Valid first name is required.').should('be.visible');
        cy.get('.invalid-feedback').eq(2).contains('Valid last name is required.').should('be.visible');
        cy.get('.invalid-feedback').eq(3).contains('Please enter a valid email address for shipping updates.').should('be.visible');
        cy.get('.invalid-feedback').eq(4).contains('Please enter your shipping address.').should('be.visible');
        cy.get('.invalid-feedback').eq(5).contains('Please select a valid country.').should('be.visible');
        cy.get('.invalid-feedback').eq(6).contains('Please provide a valid state.').should('be.visible');
        cy.get('.invalid-feedback').eq(7).contains('Zip code required.').should('be.visible');
        cy.get('.invalid-feedback').eq(8).contains('Name on card is required').should('be.visible');
        cy.get('.invalid-feedback').eq(9).contains('Credit card number is required').should('be.visible');
        cy.get('.invalid-feedback').eq(10).contains('Expiration date required').should('be.visible');
        cy.get('.invalid-feedback').eq(11).contains('Security code required').should('be.visible');
        
    });

});