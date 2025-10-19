describe("template spec", () => {
  beforeEach("login", () => {
    /*cy.visit("");
    const login = "student";
    const password = "123456!";

    cy.get("#account-menu").click();
    cy.get("#login-item").click();

    cy.get("[data-cy=username]").type(`${Cypress.env("login")}{enter}`);
    cy.get("[data-cy=password]").type(`${Cypress.env("password")}{enter}`);

    cy.get('button[type="submit"]').click();

    cy.get("#entity-menu").should("be.visible");*/
    cy.login("student", "123456!");
    cy.get("#entity-menu").should("be.visible");
  });

  it("tests", () => {
    cy.clickSelector(
      "#entity-menu",
      "#entity-menu > div > a:nth-child(1)",
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/task?page=1&sort=id,asc"
    );

    //Entity
    //cy.get('#entity-menu').click()
    //cy.get('#entity-menu > div > a:nth-child(1)').click()
    //cy.url().should("eq", "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/task?page=1&sort=id,asc")

    cy.get("#entity-menu").click();
    cy.get("#entity-menu > div > a:nth-child(2)").click();
    cy.url().should(
      "eq",
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/user-task"
    );

    //Home
    cy.get("#header-tabs > li:nth-child(1)").click();
    cy.get("#header-tabs").should("be.visible");
    cy.url().should(
      "eq",
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc"
    );

    //Swagger
    cy.get("#docs-menu").click();
    cy.get("#docs-menu > div > a").click();
    cy.url().should(
      "eq",
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/docs/docs"
    );

    //Russian
    //cy.get("#header-tabs > li:nth-child(4)").click();
    //cy.contains("Русский").click();
    //cy.get("#header-tabs > li:nth-child(1) > a").should("have.text", "Главная");
    //cy.url().should("eq", "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/user-task")
    cy.language("Русский", "Главная");

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
    cy.url().should(
      "eq",
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/settings"
    );
  });
});
