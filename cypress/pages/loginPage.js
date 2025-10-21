export class LoginPage {
    elements = {
        usernameField: ()=>cy.get("[data-cy=username]"),
        passwordField: ()=>cy.get("[data-cy=password]"),
        submitButton: ()=>cy.get('button[type="submit"]')
    };

    loginEnter(login, password) {
        this.elements.usernameField().type(login);
        this.elements.passwordField().type(password);
        this.elements.submitButton().click()
    }
}

 