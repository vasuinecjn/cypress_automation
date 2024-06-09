describe("Interacting with iframes", () => {
    // remove target attribute on link and make it to open on the same window
    it("handeling tabs approach-1", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get("button.tox-notification__dismiss").click()
        cy.wait(2000)
        let iframe = cy.get("#mce_0_ifr").its("0.contentDocument.body").should("be.visible").then(cy.wrap)
        cy.wait(2000)
        iframe.clear().type("Welcome")
        cy.wait(5000)
    })
})