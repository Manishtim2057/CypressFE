class popOver{
    verifyModalUIPop(){
        cy.get('.modal-title-icon').should('be.visible')
        cy.get('.modal-header').contains('Add Layout A Icon Left');
        cy.get('.form-group-header').contains('Content');
        cy.get('.col-md-12 > .form-label-group > .form-label').contains('Banner Image/Video')
        cy.get(':nth-child(2) > .form-label').contains('Title')
        cy.get(':nth-child(3) > .form-label').contains('Description')
        // cy.get('#description-input').contains('Description....')
        cy.get('.modal-footer > :nth-child(1)').contains('Back') 
        cy.get('.footer-btn-container > .btn-light').contains('Cancel')
        cy.get('.footer-btn-container > .btn-primary').contains('Save')
    }
    elements = {
        title : () =>  cy.get('#pTitle'),
        description : () =>  cy.get('.fr-box.fr-basic.fr-top .fr-wrapper'),
        
    }

    popOver(PopTitle,PopDescription){
        this.elements.title().type(PopTitle)
        this.elements.description().type(PopDescription)
    }
}
export const popOverTitleAndDescription = new popOver