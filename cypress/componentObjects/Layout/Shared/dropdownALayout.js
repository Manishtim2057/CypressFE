class DropdownALayout {
    get dropdown() {
        return cy.get(' .null > #media-selector > #media-select') // Or your actual dropdown selector
    }

    dropdownAndSelectA(option) {
        this.dropdown.click(); // open the dropdown
        cy.wait(500)
        cy.contains('#media-selector > .dropdown',option ).click(); // select the option
    }
}

export const dropA = new DropdownALayout();
