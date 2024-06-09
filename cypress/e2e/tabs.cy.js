describe("Handeling tabs", () => {

    // remove target attribute on link and make it to open on the same window
    it("handeling tabs approach-1", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("#content>div>a").invoke("removeAttr", "target").click()
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)
        cy.go("back")
        cy.url().should("include", "https://the-internet.herokuapp.com/windows")
    })

    // get the href attribute and append to url and visit to it
    it("handeling tabs approach", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("#content>div>a").then(e => {
            let url = e.prop("href")
            cy.visit(url)
        })
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)
        cy.go("back")
        cy.url().should("include", "https://the-internet.herokuapp.com/windows")
    })

}) 