describe('Toast Recipes basic page navigation', function() {
    it('visits the Toast Recipes home page', function() {
        cy.visit('https://andrewsoden.github.io/toast_recipes/#/')
    })

    it('visits the Information page', function() {
        cy.get('#section_information').click()
        cy.get('h2').contains('Rejoice for this is the Information page')
    })

    it('visits the Contact page', function() {
        cy.get('#section_contact').click()
        cy.get('h2').contains('Contact')
    })

    it('visits the Login page', function() {
        cy.get('#section_login').click()
        cy.get('h2').contains('Rejoice for this is the Login page')
    })

    it('visits the Home page', function() {
        cy.get('#section_home').click()
        cy.get('h2').contains('Rejoice for this is the Home page')
    })
})