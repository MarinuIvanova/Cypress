describe("Verifier website changing the password API", () => {
  const currentPassword = "654321$";
  const newPassword = "654321%";

  it("changing the password API", () => {
    cy.request({
      method: "POST",
      headers: {},
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/authenticate",
      body: { username: "marina_mg", password: "654321$", rememberMe: false },
    }).then((response) => {
      let token = response.body.id_token;
      cy.log(token);
      expect(response.status).to.equal(200);

      cy.request({
        method: "POST",

        headers: {
          Authorization: "Bearer " + token,
        },
        url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/account/change-password",
        body: { currentPassword: "654321$", newPassword: "654321%" },
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
    /*cy.visit("");
    cy.get("#account-menu").click();
    cy.get("#login-item").click();
    cy.login("marina_mg", newPassword);
    cy.get("#entity-menu").should("be.visible");*/
  });

  it("changing the password API", () => {
    cy.request({
      method: "POST",
      headers: {},
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/authenticate",
      body: { username: "marina_mg", password: "654321%", rememberMe: false },
    }).then((response) => {
      let token = response.body.id_token;
      cy.log(token);
      expect(response.status).to.equal(200);

      cy.request({
        method: "POST",

        headers: {
          Authorization: "Bearer " + token,
        },
        url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/account/change-password",
        body: { currentPassword: "654321%", newPassword: "654321$" },
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
    /*cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
    cy.get("#account-menu").click();
    cy.get("#login-item").click();
    cy.login("marina_mg", newPassword);
    cy.get("#entity-menu").should("be.visible");*/
  });
});
