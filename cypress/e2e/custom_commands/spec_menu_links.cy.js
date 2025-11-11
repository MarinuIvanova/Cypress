describe("Verifier website", () => {
  before("login", () => {
    cy.visit(Cypress.config("baseUrl"));
    cy.login(Cypress.env("login"), Cypress.env("password"));
    cy.get("#entity-menu").should("be.visible");
  });

  it("the functionality of the menu links", () => {
    cy.clickSelector(
      "#entity-menu",
      "#entity-menu > div > a:nth-child(1)",
      "/task?page=1&sort=id,asc"
    );

    //Entities
    cy.get("#entity-menu").click();
    cy.get("#entity-menu > div > a:nth-child(2)").click();
    cy.url().should("include", "/user-task");

    //Home
    cy.get("#header-tabs > li:nth-child(1)").click();
    cy.get("#header-tabs").should("be.visible");
    cy.url().should("include", "/?page=1&sort=id,asc");

    //Swagger
    cy.get("#docs-menu").click();
    cy.get("#docs-menu > div > a").click();
    cy.url().should("include", "/docs/docs");

    //Russian
    cy.language("Русский", "Главная");

    //Українська
    cy.language("Українська", "Головна");

    //Français
    cy.language("Français", "Accueil");

    //English
    cy.get("#header-tabs > li:nth-child(4)").click();
    cy.contains("English").click();
    cy.get("#header-tabs > li:nth-child(1) > a").should("have.text", "Home");

    //Account
    cy.get("#header-tabs > li:nth-child(5)").click();
    cy.contains("Settings").click();
    cy.get("#settings-title").should(
      "have.text",
      "User settings for [student]"
    );
    cy.url().should("include", "/account/settings");
  });
});
