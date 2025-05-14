import { description, title } from "../../../componentObjects/Layout/layoutButton";

class banners{
       verifyModalUI(){
        cy.get('.modal-title-icon').should('be.visible')
        cy.get('.modal-header').contains('Add Banner');
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
        title: () =>cy.get('#title-input'),
        description :  () => cy.get('#description-input')
    }

    layout(LayoutTitle, LayoutDescription){
        this.elements.title().type(LayoutTitle)
        this.elements.description().type(LayoutDescription)
    }
    
    
}
export const addBanners =  new banners 
