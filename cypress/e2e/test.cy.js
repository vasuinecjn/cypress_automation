import LoginPage from "../pageobjects/LoginPage.js"

describe("Learning javascript objects", ()=> {
    it("first test", ()=> {
        var loginPage = new LoginPage();
        loginPage.visit()
        .search("blouse")
        .validateSearch("blouse");
    })

})