// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (userName, password) => {
  cy.visit("");

  cy.get("#account-menu").click();
  cy.get("#login-item").click();

  cy.get("[data-cy=username]").type(`${userName}{enter}`);
  cy.get("[data-cy=password]").type(`${password}{enter}`);

  cy.get('button[type="submit"]').click();

  //cy.get("#entity-menu").should("be.visible");
});

Cypress.Commands.add(
  "regisration",
  (userName, email, first_password, second_password) => {
    cy.visit("");
    cy.get("#account-menu").click();
    cy.get("[data-cy=register").click();
    cy.get("#register-title").should("be.visible");

    cy.get("[data-cy=username]").type(`${userName}{enter}`);
    cy.get("[data-cy=email]").type(`${email}{enter}`);
    cy.get("[data-cy=firstPassword]").type(`${first_password}{enter}`);
    cy.get("[data-cy=secondPassword]").type(`${second_password}{enter}`);

    cy.get("#register-submit").click();
  }
);

Cypress.Commands.add("clickSelector", (selector1, selector2, Url) => {
  cy.get(selector1).click();
  cy.get(selector2).click();
  cy.url().should("eq", `${Url}`);
});

Cypress.Commands.add("language", (lang, text) => {
  cy.get("#header-tabs > li:nth-child(4)").click();
  cy.contains(lang).click();
  cy.get("#header-tabs > li:nth-child(1) > a").should("have.text", text);
});

Cypress.Commands.add("elnotexist", (select) => {
  cy.get(select).should("not.exist");
});
