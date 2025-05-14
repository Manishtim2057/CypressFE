class jPopOver {
    elements = {
        icon : () =>cy.get('.icon-link-selector-container > .btn').click(),
        jIcon : () =>cy.get('.popover-content > div > :nth-child(1)').click(),      
        popOverRight : () =>cy.get(':nth-child(1) > .popover-image-container'),
        popOverLeft : () =>cy.get(':nth-child(2) > .popover-image-container'),
        addButton : () => cy.get('.modal-footer > .btn-primary').click(),
        journeyPopTitle : () => cy.get('.form-group-body  #pTitle'),
        journeyPopDesc : () => cy.xpath('//*[@id="lyb-builder-placeholder"]/landing-page-journeys/div[4]/div/div/form/div[1]/div[2]/div/div/div/div[3]/div/div[2]/div'),
        journeyUpdateDesc : () => cy.xpath('//*[@id="lyb-builder-placeholder"]/landing-page-journeys/div[4]/div/form/div[1]/div[2]/div/div/div/div[3]/div/div[2]/div'),
        popOverDoneBtn : () => cy.get(':nth-child(4) > .theme-modal > .modal-container > form > .modal-footer > .footer-btn-container > .btn-primary').click(),
        popOverUpdateDoneBtn : () => cy.get(':nth-child(4) > .modal-container > form > .modal-footer > .footer-btn-container > .btn-primary').click(),
        popOverCancelBtn : () => cy.get('form > .modal-footer > .footer-btn-container > .btn-light').click(),
        jCarouselDesc : () => cy.get('.fr-box.fr-basic.fr-top .fr-wrapper')
    }
    popOver(elementFn){
        // this.elements(popOverRight).click()
        // this.elements(popOverLeft).click()
        // this.elements.click(popOverRight)
        elementFn().click()
    }

    journeyPopTitleDescription (jTitle, jDescription){
        this.elements.journeyPopTitle().type(jTitle)
        this.elements.journeyPopDesc().type(jDescription)
    }

    journeyUpdatePopTitleDescription (UpdateTitlem, UpdateDescriptio){
        this.elements.journeyPopTitle().type(UpdateTitlem)
        this.elements.journeyUpdateDesc().type(UpdateDescriptio)

    }
}

export const addJourneyPopOver =  new jPopOver