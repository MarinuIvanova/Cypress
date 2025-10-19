const testData = require("../fixtures/registrData.json");

/*it("registration valid", ()=>{
    cy.registration()
})*/

it("registration not valid", () => {
  testData.forEach((el) => {
    cy.regisration(el.name, el.email, el.password1, el.password2);
    cy.get('[data-cy="entity]').should("not.exist");
  });
});
