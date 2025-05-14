class journeyDropDown {
    get dropdown() {
        return cy.get('.null > .media-select-container > .selection-block > #media-selector > #media-select')
    }

    JourneyPopOverImage(option) {
        this.dropdown.click(); // open the dropdown
        cy.wait(500)
        cy.contains(option ).click(); // select the option
    }
}

export const Journey = new journeyDropDown
