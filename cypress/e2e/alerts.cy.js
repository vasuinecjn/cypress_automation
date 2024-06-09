/// <reference types="Cypress" />

describe("Handeling alerts", () => {


    // javascript alert
    it("javascript alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Alert")
        })
        // alert window is automatically closed by cypress
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    //javascript confirmation alert
    it("javascript confirmation alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        // we have to trigger the event for validating the javascript confirmation alert by clicking on ok button
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        // alert window is automatically closed by cypress
        cy.get("#result").should("have.text", "You clicked: Ok")
    })

    // javascript confirmation alert and click on cancle button on confirmation
    it("javascript confirmation alert with cancle button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        // we have to trigger the event for validating the javascript confirmation alert by clicking on ok button
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.on("window:confirm", () => false) // this way cypress will close alert window using cancel button
        // alert window is automatically closed by cypress
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })

    // javascript prompt alert 
    it("javascript prompt alert with ok button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("welcome")
        })
        cy.get("button[onclick='jsPrompt()']").click()
        // alert window is automatically closed by cypress
        cy.get("#result").should("have.text", "You entered: welcome")
    })

    it("javascript prompt alert with cancel button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, "prompt").callsFake(() => null)
        })
        cy.get("button[onclick='jsPrompt()']").click()
        // alert window is automatically closed by cypress
        cy.get("#result").should("have.text", "You entered: null")
    })
    
}) 