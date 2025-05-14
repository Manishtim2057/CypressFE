import { description, title } from "../../../componentObjects/Layout/layoutButton";

class layoutA{
       verifyModalUI(){
        cy.get('.modal-title-icon').should('be.visible')
        // cy.get('.modal-header').contains('Add Layout A Icon Left');
        cy.get('.form-group-header').contains('Content');
        // cy.get('.form-group-body > :nth-child(1) > div').contains('Icon')
        // cy.get('.form-group-body > :nth-child(2) > div').contains('Icon Link')
        // cy.get(':nth-child(2) > .form-label').contains('Title')
        // cy.get(':nth-child(3) > .form-label').contains('Description')
        // cy.get('#description-input').contains('Description....')
        cy.get('#lTitle').should('be.visible')
        cy.get('#lDescription').should('be.visible')
        cy.get('.modal-footer > :nth-child(1)').contains('Back') 
        cy.get('.footer-btn-container > .btn-light').contains('Cancel')
        cy.get('.footer-btn-container > .btn-primary').contains('Save')
    }
    elements = {
        title: () =>cy.get('.modal-body'),
        description :  () => cy.get('#lDescription')
    }

    layoutA(LayoutATitle, LayoutADescription){
        this.elements.title().type(LayoutATitle)
        this.elements.description().type(LayoutADescription)
    }
}
export const addlayoutA =  new layoutA 
