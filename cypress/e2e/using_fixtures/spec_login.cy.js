const testData = require("../../fixtures/loginData.json");

it("login not valid", () => {
  testData.forEach((element) => {
    cy.login(element.name, element.password);
    cy.get('[data-cy="entity]').should("not.exist");
  });
});
