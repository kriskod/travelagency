describe('Admin functions', () => {
    it('Navigates to login page', function () {
        cy.visit('http://localhost:4200/logowanie')
        cy.url()
            .should('include', '/logowanie')

        cy.contains('Zaloguj')
        cy.contains('Powrót')
    })

    it('Logging as admin', function () {
        cy.get('.email').type('adminek@mail.com')
            .should('have.value', 'adminek@mail.com')

        cy.get('.password').type('123456789')
            .should('have.value', '123456789')
        cy.contains('Zaloguj').click()
    })
    it('Check if admin has access to users and tours data', () => {
        cy.get('.dropdown-toggle').click()
        //cy.get('.signout').click()
        cy.get('.admin').click()
    })
    it('Check if admin has visual on users', () => {
        cy.get('.userManagement').click()
        cy.get('tbody').its('length').should('be.gt', 0)
    })
    it('Check if admin can edit user list', () => {
        cy.get('.userManagement').click()
        cy.get('.deleteUser').last().click()
        cy.get('tbody').its('length')
    })

    it('Check if admin has visual on tours', () => {
        cy.get('.tourManagement').click()
        cy.get('tbody').its('length').should('be.gt', 0)
    })
})