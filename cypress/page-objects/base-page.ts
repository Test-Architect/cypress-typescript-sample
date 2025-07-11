class BasePage {
  // Common methods that can be reused across pages

  // Click action
  public click(selector: string) {
    cy.get(selector).click();
    cy.logAndReport(
      `==> Successfully clicked on element with selector: ${selector}`,
    );
  }

  // Type action
  public type(selector: string, text: string) {
    cy.get(selector).type(text);
    cy.logAndReport(
      `==> Successfully typed '${text}' into element with selector: ${selector}`,
    );
  }
}

export default BasePage;
