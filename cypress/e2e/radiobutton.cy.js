describe("Interaction with web elements", () => {

    it("selecting radio button", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("be.not.checked")
    })

    it("selecting checkbot", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // input.form-check-input[type='checkbox']
        cy.get("input#monday").check().should("be.checked")
        cy.get("input#monday").uncheck().should("be.not.checked")
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")        
    })
})