describe('Visit app', function() {
    it('Visiting created app', function() {
        cy.visit('http://localhost:4200/dashboard')
        cy.contains('Zaloguj')
        cy.contains('Zarejestruj')
    })
})