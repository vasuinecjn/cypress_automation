/// <reference types="Cypress" />

describe("Interaction with web elements", () => {

    it.skip("dropdown with select", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#country").select("Brazil").should("have.value", "brazil")
    })

    it.skip("dropdown without select", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#country").select("Brazil").should("have.value", "brazil")
    })

    it("google dynamic search result selection", () => {
        cy.visit("https://google.com/")
        cy.get("#APjFqb").type("cypress automation")
        cy.get("#Alh6id").should("be.visible")
        cy.get("#Alh6id ul>li div.pcTkSc>div[role='option']").each(($el, index, $list) => {
            if($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })
        // cy.wait(5000)
        cy.title().should("eq", "cypress automation tutorial - Google Search")

    })
}) 