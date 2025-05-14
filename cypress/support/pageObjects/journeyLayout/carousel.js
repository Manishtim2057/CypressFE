class journeyCarousel{

    elements = {
        jCarouselTitle: () => cy.get('#title'),
        jCarouselDescription: () => cy.get('#description'),
        carousel_add : () => cy.get(':nth-child(3) > div > .btn').click(),
        carouselTitle : () => cy.get('#jTitle'),
        carouselBtnLabel : () => cy.get('#label'),
        carouselLink : () => cy.get('#link'),
        carouselDescription : () => cy.get('#jDescription'),
        carouselDropDown : () => cy.get('#image'),
        carouselCancel : () =>cy.get(':nth-child(4) > .form-container > form > .modal-footer > .btn-light').click(),
        carouselSave : () => cy.get('.modal-footer > .btn-primary').click(),
        popSave : () =>cy.get('.footer-btn-container > .btn-primary').click(),
        popCancel : () => cy.get(':nth-child(4) > .form-container > form > .modal-footer > .btn-primary').click(),
        jCarouselDesc : () => cy.xpath('//*[@id="lyb-builder-placeholder"]/landing-page-journeys/div[4]/div/div[2]/form/div[1]/div/div/div/div[5]/div/div[2]')



    }
    carousel_Title_Label_Link_Description(Title,Label,Link,Description){
        this.elements.carouselTitle().type(Title)
        this.elements.carouselBtnLabel().type(Label)
        this.elements.carouselLink().type(Link)
        this.elements.jCarouselDesc().type(Description)
    }

    carouselDropAndSelect (option){
        this.elements.carouselDropDown().click();
        cy.wait(500)
        cy.contains(option).click()
    }



}

export const jcarousel_items = new journeyCarousel