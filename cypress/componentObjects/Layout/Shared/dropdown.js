class Dropdown {
    get dropdown() {
        return cy.get('#media-select') // Or your actual dropdown selector
    }

    dropdownAndSelect(option) {
        this.dropdown.click(); // open the dropdown
        cy.wait(500)
        cy.contains(option).click(); // select the option
    }
}

export const drop = new Dropdown();
