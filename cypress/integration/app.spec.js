describe("Main", () => {
  it("Should navigate to the home page", () => {
    cy.visit("http://localhost:3000/");
  });
  it("Type name in to first question input", () => {
    cy.get("input[id=name]")
      .focus()
      .type("John Doe", { delay: 100 })
      .should("have.value", "John Doe")
      .blur();
    cy.wait(500);
  });
  it("Click next to proceed to the second question", () => {
    cy.get("span[role=button]").click();
    cy.wait(500);
  });
  it("Type email in to second question input", () => {
    cy.get("input[id=email]")
      .focus()
      .type("jdoe@email.com", { delay: 100 })
      .should("have.value", "jdoe@email.com")
      .blur();
    cy.wait(500);
  });
  it("Click next to proceed to the third question", () => {
    cy.get("span[role=button]").last().click();
    cy.wait(500);
  });
  it("Select an option for the third question", () => {
    cy.get("div[role=radio]").last().click();
    cy.wait(500);
    cy.get("div[role=radio]").eq(1).click();
    cy.wait(500);
    cy.get("div[role=radio]").first().click();
    cy.wait(500);
  });
  it("Proceed to the results page", () => {
    cy.get("span[role=button]").last().click();
    cy.wait(1000);
  });
  it("Click back to proceed to the first question", () => {
    cy.get("span[role=button]").first().click();
    cy.wait(500);
    cy.get("span[role=button]").first().click();
    cy.wait(500);
    cy.get("span[role=button]").first().click();
    cy.wait(500);
  });
  it("Retype name in to first question input", () => {
    cy.get("input[id=name]")
      .focus()
      .type(
        "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}",
        { delay: 100 }
      );
    cy.wait(500);
    cy.get("input[id=name]").type("{backspace}", { delay: 100 });
    cy.wait(500);
    cy.get("input[id=name]")
      .type("{backspace}Jane Doe", { delay: 100 })
      .should("have.value", "Jane Doe")
      .blur();
    cy.wait(500);
  });
  it("Click next to proceed to second question", () => {
    cy.get("span[role=button]").last().click();
    cy.wait(500);
  });
  it("Retype email in to second question input", () => {
    cy.get("input[id=email]")
      .focus()
      .type(
        "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}",
        { delay: 100 }
      );
    cy.wait(500);
    cy.get("input[id=email]")
      .type("janedoe@email.com", { delay: 100 })
      .should("have.value", "janedoe@email.com");
    cy.wait(500);
  });
  it("Click next to proceed to third question", () => {
    cy.get("span[role=button]").last().click();
    cy.wait(500);
  });
  it("Select an option for the third question", () => {
    cy.get("div[role=radio]").eq(1).click();
    cy.wait(500);
  });
  it("Proceed to the results page", () => {
    cy.get("span[role=button]").last().click();
    cy.wait(1000);
  });
});
