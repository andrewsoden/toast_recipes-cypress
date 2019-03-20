describe('Toast Recipes submit Contact form', function() {
    it('visits the Toast Recipes home page', function() {
        cy.visit('https://andrewsoden.github.io/toast_recipes/#/')
    })

    it('visits the Contact page', function() {
        cy.get('#section_contact').click()
        cy.get('h1').contains('Contact')
    })

    it('fills out the Contact form', function() {
        cy.get(':nth-child(1) > .form-control')
        .type('TESTDoctor');

        cy.get(':nth-child(2) > .form-control')
        .type('TESTBear');

        cy.get(':nth-child(3) > .form-control')
        .type('test@example.com.au');

        cy.get(':nth-child(4) > .form-control')
        .type('Secret2019');

        cy.get(':nth-child(5) > .form-control')
        .type('Secret2019');

        cy.get('textarea')
        .type('Abcdefghijklmnopqrstuvwxyz $!.0123456789');

        cy.get('#submitButton')
        .click({force:true});
    });

    it('checks the Contact form is empty upon submission', function() {
        cy.get(':nth-child(1) > .form-control')
        .should('be.empty');

        cy.get(':nth-child(2) > .form-control')
        .should('be.empty');

        cy.get(':nth-child(3) > .form-control')
        .should('be.empty');

        cy.get(':nth-child(4) > .form-control')
        .should('be.empty');

        cy.get(':nth-child(5) > .form-control')
        .should('be.empty');

        cy.get('textarea')
        .should('be.empty');
    });
})