describe("explicit assertions", () => {

    it("testing explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expectedName = "xyz";

        cy.get(".oxd-userdropdown-name").then((x) => {
            let actualName = x.text()
            expect(actualName).to.not.equal(expectedName)
        })
    })
})