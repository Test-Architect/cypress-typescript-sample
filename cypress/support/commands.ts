/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
interface LogEntry {
  url: string;
  duration: string;
}

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('logToConsoleAndMochawesome', (log: LogEntry) => {
  const logMessage = `Request to ${log.url} exceeded duration: ${log.duration} ms`;

  // Log to Cypress Test Runner
  cy.log(logMessage);

  // Log to Mochawesome (send log as a task)
  cy.task('log', logMessage);

  // Log to Cypress Test Runner within the Mochawesome context
  Cypress.log({
    name: 'logToConsoleAndMochawesome',
    message: [logMessage],
  });
});

Cypress.Commands.add('logAndReport', (message: string) => {
  // Log to the test runner console
  cy.log(message);
  // Add to Mochawesome context for reporting
  cy.addTestContext(message);
});
