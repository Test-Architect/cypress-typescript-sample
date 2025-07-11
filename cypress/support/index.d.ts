/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    logToConsoleAndMochawesome(log: LogEntry): void;
    logAndReport(message: string): void;
  }
}
