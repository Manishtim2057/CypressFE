import { description, title } from "../../../componentObjects/Layout/layoutButton";

class journeyLayout{
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
        title: () =>cy.get('#lTitle'),
        BannerTitle: () =>cy.get('#title-input'),
        carouselTitle: () =>cy.get('#title'),
        description :  () => cy.get('.fr-box.fr-basic'),
        bannerDesc:  () => cy.get('.fr-box.fr-basic .fr-element'),
        // editLayout : () => cy.get(':nth-child(1) > .parent > .right > [aria-label="Edit"]').click(),
        editHeaderLayout : () => cy.get(':nth-child(1) > .parent > .right > [aria-label="Edit"]').click(),
        editBannerLayout : () => cy.get(':nth-child(2) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutA : () => cy.get(':nth-child(3) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutARight : () => cy.get(':nth-child(4) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutBleft : () => cy.get(':nth-child(5) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutBRight : () => cy.get(':nth-child(6) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutCLeft : () => cy.get(':nth-child(7) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutCRight : () => cy.get(':nth-child(8) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutDLeft : () => cy.get(':nth-child(9) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutDRight : () => cy.get(':nth-child(10) > .parent > .right > [aria-label="Edit"]').click(),
        editLayoutCaraousel : () =>cy.get(':nth-child(10) > .parent > .right > [aria-label="Edit"]').click(),      
        editLayoutFooter : () =>cy.get(':nth-child(13) > .parent > .right > [aria-label="Edit"]').click(),      
        editJourneyCarouselItems1 : () => cy.get('.form-pill-container > :nth-child(1) > .d-flex > :nth-child(1)').click(),      
        editJourneyCarouselItems2 : () => cy.get('.form-pill-container > :nth-child(2) > .d-flex > :nth-child(1)').click(),      
        editJourneyCarouselItems3 : () => cy.get('.form-pill-container > :nth-child(3) > .d-flex > :nth-child(1)').click(),      
        editJourneyCarouselItems4 : () => cy.get('.form-pill-container > :nth-child(4) > .d-flex > :nth-child(1)').click(),      
        editJourneyCarouselItems5 : () => cy.get('.form-pill-container > :nth-child(5) > .d-flex > :nth-child(1)').click(),      
        editJourneyCarouselItems6 : () => cy.get('.form-pill-container > :nth-child(6) > .d-flex > :nth-child(1)').click(),      
        footerTitle : () =>  cy.get(':nth-child(2) > .fr-box > .fr-wrapper > .fr-element > p'),
        footerDescription : () =>  cy.get(':nth-child(3) > .fr-box > .fr-wrapper > .fr-element > p')

        // editJourneyCarouselItems2 : () => cy.get('.form-pill-container > :nth-child(1) > .d-flex > :nth-child(2)').click(),        
        // editJourneyCarouselItems3 : () => cy.get('.form-pill-container > :nth-child(1) > .d-flex > :nth-child(3)').click(),        
        // editJourneyCarouselItems4 : () => cy.get('.form-pill-container > :nth-child(1) > .d-flex > :nth-child(4)').click(),        
        // editJourneyCarouselItems5 : () => cy.get('.form-pill-container > :nth-child(1) > .d-flex > :nth-child(5)').click(),        
        // editJourneyCarouselItems6 : () => cy.get('.form-pill-container > :nth-child(1) > .d-flex > :nth-child(6)').click(),        
    }

    jLayout(LayoutATitle, LayoutADescription){
        this.elements.title().type(LayoutATitle)
        this.elements.description().type(LayoutADescription)
    }
}
export const addJlayout =  new journeyLayout 
