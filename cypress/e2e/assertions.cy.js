describe("Assertions demo", () => {
    it("Implicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        // assertions
        cy.url().should("include", "orangehrmlive.com")
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("contain", "orangehrm")

        cy.url().should("include", "orangehrmlive.com")
        .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain", "orangehrm")
        .and("not.contain", "greenhrm")

        cy.title().should("eq", "OrangeHRM")
    

        cy.get('.orangehrm-login-branding > img').should("be.visible")
        cy.get('.orangehrm-login-branding > img').should("exist")

    })
})