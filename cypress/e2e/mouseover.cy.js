describe("mouse over testing", ()=> {
    it("first test on mouse over", ()=> {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[title='Women']").trigger("mouseover").find("a[title='T-shirts']").click()
    })

})