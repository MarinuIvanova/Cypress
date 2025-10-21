describe("template spec", () => {
    const currentPassword = "654321%";
    const newPassword = '654321$'

  beforeEach("login", () => {
    //const currentPassword = "654321$";
    //const newPassword = '654321%'
    cy.login("marina_mg", currentPassword);
    cy.get("#entity-menu").should("be.visible");
  });

  it("change password", () => {

    //Account
    cy.get("#header-tabs > li:nth-child(6)").click();
    cy.contains("Password").click();
    cy.get("#password-title").should("have.text", "Password for [marina_mg]");
    cy.url().should(
      "eq",
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/password"
    );

    //Password for marina_mg
    cy.get('#currentPassword').type(currentPassword)
    cy.get('[data-cy=newPassword]').type(newPassword)
    cy.get('[data-cy=confirmPassword]').type(newPassword)
    cy.get('[data-cy=submit]').click()


  });
});
