class remove{
    elements = {
        flyout : () => cy.get(':nth-child(1) > .parent > .right > .dropdown > #action-menu'),
        remove : () => cy.get('.dropdown-menu > :nth-child(2)'),
        proceed : () => cy.get('.footer-btn-container > .btn-primary'),
        cancel : () => cy.get('.footer-btn-container > .btn-light'),
        layoutList : () => cy.get(':nth-child(1) > .parent')      
    }
    removeAllLayout(){
        this.elements.flyout().click()
        this.elements.remove().click()
        this.elements.proceed().click()
    }
    
}

export const removeLayout = new remove()