export const saveButton = () =>{
    cy.get('.modal-footer > .footer-btn-container > .btn-primary').click()
}
export const addButton = () =>{
    cy.get('#lyb-builder-placeholder > landing-page-journey > .theme-modal > .add-layouts-container > .modal-footer > .btn-primary').should('be.visible').click()
}
export const backButton = () =>{
    cy.get('.modal-footer > :nth-child(1)')
}
export const cancelButton = () =>{
    cy.get('.footer-btn-container > .btn-light')
}
export const title = () =>{
    cy.get('#title-input')
}
export const description = () =>{
    cy.get('#description-input')
}

export const popOverSave = () =>{
    cy.get('.form-group-btn-container > .btn-primary').click()
}
export const popOverCancel = () =>{
    cy.get('.form-group-btn-container > .btn-light').click()
}

