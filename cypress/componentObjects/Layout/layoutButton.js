
export const clickEditLayoutButton = () =>{
    cy.get('.btn-outline-primary').click()    // cy.get('.editor-preview-container').should('be.visible')
}
export const clickAddLayoutButton = () =>{
    cy.get('.sidebar-container .editor-sidebar .add-layout-section .add-layout-btn').click()
}
export const selectHeaderLayoutCard = () =>{
    cy.get(':nth-child(1) > .layout-image-container').click()
}
export const selectBannerLayoutcard = () =>{
    cy.get(':nth-child(2) > .layout-image-container').click()
}
export const layoutALeft = () =>{
    cy.get(':nth-child(3) > .layout-image-container > img').click()
}
export const layoutARight = () =>{
    cy.get(':nth-child(4) > .layout-image-container > img').click()
}
export const layoutBLeft = () =>{
    cy.get(':nth-child(5) > .layout-image-container').click()
}
export const layoutBRight = () =>{
    cy.get(':nth-child(6) > .layout-image-container > img').click()
}
export const layoutCRight = () =>{
    cy.get(':nth-child(7) > .layout-image-container > img').click()
}
export const layoutCLeft = () =>{
    cy.get(':nth-child(8) > .layout-image-container > img').click()
}
export const layoutDLeft = () =>{
    cy.get(':nth-child(9) > .layout-image-container > img').click()
}
export const layoutDRight = () =>{
    cy.get(':nth-child(10) > .layout-image-container > img').click()
}
export const carousel = () =>{
    cy.get(':nth-child(11) > .layout-image-container').click()
}
export const footer = () =>{
    cy.get(':nth-child(12) > .layout-image-container > img').click()
}
export const header = () =>{
    cy.get(':nth-child(13) > .layout-image-container > img').click()
}
export const title = () =>{
    cy.get('#title-input')
}
export const description = () =>{
    cy.get('#description-input')
}
