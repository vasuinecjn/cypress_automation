import HomePage from "./HomePage";

class LoginPage {

    url = "http://www.automationpractice.pl/index.php";

    locators = {
        "searchField": "#search_query_top",
        "searchButton": "button[name='submit_search']"
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    search(searchText) {
        cy.get(this.locators.searchField).type(searchText);
        cy.get(this.locators.searchButton).click();
        return new HomePage();
    }
}

export default LoginPage;