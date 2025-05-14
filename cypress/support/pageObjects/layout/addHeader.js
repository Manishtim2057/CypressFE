class headers {
    headers() {
        cy.get('.modal-title-icon').should('be.visible')
        cy.get('.header-form-container > .modal-header').contains('Add Header');
        cy.get('.form-group-header').contains('Content');
        cy.get('.form-label').contains('Logo');
        cy.get('.modal-footer > :nth-child(1)').contains('Back') 
        cy.get('.footer-btn-container > .btn-light').contains('Cancel')
        cy.get('.footer-btn-container > .btn-primary').contains('Save')

    }
}

export const addHeader = new headers