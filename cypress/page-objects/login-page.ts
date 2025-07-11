/// <reference types="cypress" />

import BasePage from './base-page';

class LoginPage extends BasePage {
  private userNameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessageContainer = '.error-message-container';

  // Method to login with credentials
  public login(username: string, password: string) {
    this.type(this.userNameInput, username);
    this.type(this.passwordInput, password);
    this.click(this.loginButton);
    cy.logAndReport(`==> Attempted to log in with username: ${username}`);
    // Check for login error
    cy.get('body').then(($body) => {
      if ($body.find(this.errorMessageContainer).length > 0) {
        cy.get(this.errorMessageContainer)
          .invoke('text')
          .then((errorMessage) => {
            throw new Error(`Login failed with error message: ${errorMessage}`);
          });
      } else {
        // Verify if navigated to inventory page
        cy.url().should('include', '/inventory.html');
        cy.logAndReport(
          `==> Successfully logged in and navigated to inventory page.`,
        );
      }
    });
  }
  public verifyPageTitleDisplayedCorrectly(titleContains: string) {
    cy.title().should('contain', titleContains);
    cy.logAndReport(
      `==> Sucessfully verified Page title displayed, it contains - ${titleContains}`,
    );
  }
}

export default LoginPage;
