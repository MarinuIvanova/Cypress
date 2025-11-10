import { LoginPage } from "../pages/loginPage";

describe("Verifier website changing the password", () => {
  const currentPassword = "654321$";
  const newPassword = "654321%";
  let loginUser = new LoginPage();

  it("changing the password to a new", () => {
    //login with current password
    cy.visit("");
    cy.get("#account-menu").click();
    cy.get("#login-item").click();
    loginUser.loginEnter("marina_mg", currentPassword);
    cy.get("#entity-menu").should("be.visible");

    //change password to new
    cy.get("#header-tabs > li:nth-child(6)").click();
    cy.contains("Password").click();
    cy.get("#password-title").should("have.text", "Password for [marina_mg]");
    cy.url().should(
      "include",
      "/account/password"
    );

    cy.get("#currentPassword").type(currentPassword);
    cy.get("[data-cy=newPassword]").type(newPassword);
    cy.get("[data-cy=confirmPassword]").type(newPassword);
    cy.get("[data-cy=submit]").click();

    //Account sign out
    cy.get("#header-tabs > li:nth-child(6)").click();
    cy.contains("Sign out").click();
    cy.get(".p-5").should("have.text", "Logged out successfully!");
    cy.url().should(
      "include",
      "/logout"
    );
  });

  it("changing the password from new to old", () => {
    //login with new password
    cy.visit("");
    cy.get("#account-menu").click();
    cy.get("#login-item").click();
    loginUser.loginEnter("marina_mg", newPassword);
    cy.get("#entity-menu").should("be.visible");

    //Change password from new to current
    cy.get("#header-tabs > li:nth-child(6)").click();
    cy.contains("Password").click();
    cy.get("#password-title").should("have.text", "Password for [marina_mg]");
    cy.url().should(
      "include",
      "/account/password"
    );
    
    cy.get("#currentPassword").type(newPassword);
    cy.get("[data-cy=newPassword]").type(currentPassword);
    cy.get("[data-cy=confirmPassword]").type(currentPassword);
    cy.get("[data-cy=submit]").click();

    //Account sign out
    cy.get("#header-tabs > li:nth-child(6)").click();
    cy.contains("Sign out").click();
    cy.get(".p-5").should("have.text", "Logged out successfully!");
    cy.url().should(
      "include",
      "/logout"
    );
  });

  it("login with old password", () => {
    //login with old password
    cy.visit("");
    cy.get("#account-menu").click();
    cy.get("#login-item").click();
    loginUser.loginEnter("marina_mg", currentPassword);
    cy.get("#entity-menu").should("be.visible");
  });
});
