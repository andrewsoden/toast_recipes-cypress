describe('Toast Recipes basic page navigation', function() {
    it('visits the Toast Recipes home page', function() {
        cy.visit('https://andrewsoden.github.io/toast_recipes/#/')
    })

    it('visits the Information page', function() {
        cy.get(':nth-child(2) > a').click()
        cy.get('h2').contains('Rejoice for this is the Information page')
    })

    it('visits the Contact page', function() {
        cy.get(':nth-child(3) > a').click()
        cy.get('h1').contains('Contact')
    })

    it('visits the Login page', function() {
        cy.get(':nth-child(4) > a').click()
        cy.get('h2').contains('Rejoice for this is the Login page')
    })

    it('visits the Home page', function() {
        cy.get(':nth-child(1) > a').click()
        cy.get('h2').contains('Rejoice for this is the Home page')
    })
})