class HomePage {

    locators = {
        "center_column": "#center_column > h1 > .lighter"
        
    }

    validateSearch(validationText) {
        cy.get(this.locators.center_column).should("contain.text", validationText);
        return this;
    }

}

export default HomePage;