class icon {
    elements = {
        icon : () =>cy.get('.form-group-body > :nth-child(2) > div > .btn').click(),
        popOverRight : () =>cy.get(':nth-child(1) > .popover-image-container > img').click(),
        popOverLeft : () =>cy.get(':nth-child(2) > .popover-image-container > img').click(),
        addButton : () => cy.get('.modal-footer > .btn-primary').click()
    }
    popOver(elementFn){
        // this.elements(popOverRight).click()
        // this.elements(popOverLeft).click()
        // this.elements.click(popOverRight)
        elementFn().click()
    }
}

export const layoutIcon =  new icon