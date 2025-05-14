class animation {
    elements = {
        dropdown: () => cy.get('#custom-select')

    }

    animationDropDown(option){
        this.elements.dropdown().click();
        cy.wait (500);
        cy.contains(option).click()

    }
}
export const animationDrop = new animation