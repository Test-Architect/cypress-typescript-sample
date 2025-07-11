# cypress-typescript-sample
**Developer**: [Sakharam Thorat](https://www.linkedin.com/in/sakharamthorat/)

## Automated Test Suite Documentation for Sauce Labs Demo Website
## Problem Statement
Develop an automated test suite for the Sauce Labs demo website. The test suite should automate the customer flow of selecting three random items from the inventory, adding them to the cart, and completing the checkout process. The automation should ensure thorough coverage of this flow, validating key functionalities and user interactions throughout the process.

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [Test Flow](#test-flow)
5. [Assertions](#assertions)
6. [Reporting](#reporting)
7. [Page Object Model](#page-object-model)
8. [Running the Tests](#running-the-tests)
9. [Writing New Test Cases](#writing-new-test-cases)
10. [CI/CD Using GitHub Actions](#cicd-using-github-actions)

## Introduction
This project comprises an automated test suite developed for the Sauce Labs demo website. Its primary objective is to automate the customer journey of selecting three random items from the inventory, adding them to the cart, and completing the checkout process. The tests are implemented using Cypress with TypeScript, ensuring a robust and maintainable codebase.

Key features of this project include:

- Design Pattern - Page Object Model (POM): Enhances code maintainability and readability by organizing test interactions in separate classes for different pages.
- ESLint and Prettier Integration: Ensures code quality and consistency. ESLint helps in identifying and fixing problems in the JavaScript code, while Prettier automatically formats the code to maintain a consistent style.
- Cross-browser Testing: The CI workflow supports running test cases on four browsers: Chrome, Firefox, Edge, and Electron.

## Project Structure
```shell
.
├── .eslintrc.js                        # ESLint configuration
├── .github/                            # GitHub workflows for CI/CD
│   └── workflows/
│       ├── quality.yml                 # Workflow for code quality checks
│       └── up-e2e-ui-cypress.yml       # Workflow for E2E tests with Cypress
├── .gitignore                          # Git ignore file
├── .nvmrc                              # Node version manager configuration
├── .prettierrc                         # Prettier configuration
├── README.md                           # Project documentation
├── cypress/                            # Cypress tests and configurations
│   ├── downloads/                      # Directory for downloaded files during tests
│   ├── e2e/                            # E2E test specifications
│   │   └── sauce-demo.cy.ts            # Main test file for Sauce Labs demo
│   ├── fixtures/                       # Test data and network request mocks
│   │   ├── example.json                # Example fixture file
│   │   └── networkRequests.json        # Network requests data
│   ├── page-objects/                   # Page Object Model classes
│   │   ├── base-page.ts                # Base page with common methods
│   │   ├── cart-page.ts                # Page object for the cart page
│   │   ├── checkout-page.ts            # Page object for the checkout page
│   │   ├── inventory-page.ts           # Page object for the inventory page
│   │   └── login-page.ts               # Page object for the login page
│   ├── reports/                        # Test reports
│   │   ├── chrome/                     # Chrome browser reports
│   │   │   ├── chrome-ats-report.html  # Chrome test report
│   │   │   └── videos/                 # Videos recorded during Chrome tests
│   │   │       └── sauce-demo.cy.ts.mp4  # Test video
│   │   ├── edge/                       # Edge browser reports
│   │   │   ├── edge-ats-report.html    # Edge test report
│   │   │   └── videos/                 # Videos recorded during Edge tests
│   │   │       └── sauce-demo.cy.ts.mp4  # Test video
│   │   ├── electron/                   # Electron browser reports
│   │   │   ├── electron-ats-report.html  # Electron test report
│   │   │   └── videos/                 # Videos recorded during Electron tests
│   │   │       └── sauce-demo.cy.ts.mp4  # Test video
│   │   └── firefox/                    # Firefox browser reports
│   │       ├── firefox-ats-report.html  # Firefox test report
│   │       └── videos/                 # Videos recorded during Firefox tests
│   ├── screenshots/                    # Screenshots taken during tests
│   ├── support/                        # Support files and custom commands
│   │   ├── commands.ts                 # Custom Cypress commands
│   │   ├── e2e.ts                      # E2E test setup and teardown
│   │   ├── index.d.ts                  # TypeScript definitions
│   │   └── index.ts                    # Support file initialization
│   ├── tsconfig.json                   # TypeScript configuration for Cypress
│   └── videos/                         # Videos recorded during tests
│       └── sauce-demo.cy.ts.mp4        # Test video
├── cypress.config.ts                   # Cypress configuration
├── package-lock.json                   # NPM lock file
├── package.json                        # NPM dependencies and scripts
└── tsconfig.json                       # TypeScript configuration

```
### Key Folders and Files:

1. .eslintrc.js, .prettierrc: Configuration files for ESLint and Prettier.
2. .github/workflows/: GitHub Actions workflows for quality checks and CI.
3. .gitignore: Git ignore rules to exclude certain files and folders.
4. .nvmrc: Node version manager configuration for consistent Node.js version.
5. cypress/: Cypress test automation framework setup.
6. package.json, package-lock.json: Node.js dependencies and lock file.
7. tsconfig.json: TypeScript configuration for compiling TypeScript code.

## Setup Instructions
### Clone the Repository
```shell
    git clone https://github.com/srthorat/sauce-lab-ats-cypress-typescript.git
    cd sauce-lab-ats-cypress-typescript
```
### Install Dependencies
```shell
    npm install
```
### Open Cypress Test Runner
```shell
    npx cypress open
```
## Test Flow
The test suite automates the following flow:

1. Login to the Sauce Labs demo website.
2. Navigate to the inventory page.
3. Select three random items from the inventory.
4. Add selected items to the cart.
5. Proceed to checkout.
6. Fill in the checkout information.
7. Verify the prices and complete the checkout.

## Assertions
The test suite includes assertions to verify:

1. The prices of the selected items.
2. The total price and tax on the checkout page.
3. The successful completion message after checkout.

## Reporting
Reporting
The project uses Cypress with Mochawesome reporter to generate detailed reports and videos:

- HTML Reports: Detailed test execution reports for each browser are stored in the following directories:

    - Chrome: cypress/reports/chrome
    - Firefox: cypress/reports/firefox
    - Edge: cypress/reports/edge
    - Electron: cypress/reports/electron

    Each browser directory contains HTML reports named according to the browser and test suite (chrome-ats-report.html, firefox-ats-report.html, etc.).

- Videos: Videos of test executions for each browser are recorded and stored in the respective browser's report directories under cypress/reports/<browser>/videos.

- Logs: Detailed logs for debugging purposes are also available, providing insights into test execution and any errors encountered.

Note: There is all redy existing issue with firefox for screenshot and recording https://github.com/cypress-io/cypress/issues/18415 - Video functionality is not working on Firefox 93 and above

## Page Object Model
The Page Object Model (POM) design pattern is implemented to enhance code maintainability and readability. Key page objects include:
- BasePage: Contains common methods used by other page objects.
- LoginPage: Methods to interact with the login page.
- InventoryPage: Methods to interact with the inventory page.
- CartPage: Methods to interact with the cart page.
- CheckoutPage: Methods to interact with the checkout page.
### example - LoginPage
```shell
    // cypress/page-objects/login-page.ts
    /// <reference types="cypress" />

    import BasePage from './base-page';

    class LoginPage extends BasePage {
        private userNameInput = '#user-name';
        private passwordInput = '#password';
        private loginButton = '#login-button';

        // Method to login with credentials
        public login(username: string, password: string) {
            this.type(this.userNameInput, username);
            this.type(this.passwordInput, password);
            this.click(this.loginButton);
            cy.logAndReport(`==> Successfully logged in with username: ${username}`);
        }
        public verifyPageTitleDisplayedCorrectly(titleContains: string) {
        cy.title().should('contain', titleContains);
        cy.logAndReport(
        `==> Sucessfully verified Page title displayed, it contains - ${titleContains}`,
        );
    }
    }
    export default LoginPage;
```

## Running the Tests
The following npm scripts are defined to run tests:
```shell
    "scripts": {
        "cypress:run": "cypress run --config-file ./cypress.config.ts",
        "cypress:open": "cypress open --config-file ./cypress.config.ts",
        "cypress:run:chrome": "cypress run --browser chrome --headless --config-file ./cypress.config.ts --reporter cypress-mochawesome-reporter --reporter-options reportDir=cypress/reports/chrome,reportFilename=chrome-ats-report",
        "cypress:run:firefox": "cypress run --browser firefox --headless --config-file ./cypress.config.ts --reporter cypress-mochawesome-reporter --reporter-options reportDir=cypress/reports/firefox,reportFilename=firefox-ats-report",
        "cypress:run:edge": "cypress run --browser edge --headless --config-file ./cypress.config.ts --reporter cypress-mochawesome-reporter --reporter-options reportDir=cypress/reports/edge,reportFilename=edge-ats-report",
        "cypress:run:electron": "cypress run --browser electron --headless --config-file ./cypress.config.ts --reporter cypress-mochawesome-reporter --reporter-options reportDir=cypress/reports/electron,reportFilename=electron-ats-report",
        "cypress:run:all": "npm run cypress:run:chrome && npm run cypress:run:firefox && npm run cypress:run:edge && npm run cypress:run:electron"
    }
```
- Set Environment Variables: This is must do step else all test will fail
    ```shell
    export CYPRESS_username=username
    export CYPRESS_password=password
    ```
    Note: Replace username and password with your actual credentials.
    
    or

    To run tests with environment variables:
    ```shell
        CYPRESS_username=username CYPRESS_password=password npm run cypress:run:all
    ```

- Run All Tests: This will run test on all four browser sequentially 
    ```
    npm run cypress:run:all
    ```

- Run Tests in Specific Browser:
    ```shell
    npm run cypress:run:chrome
    npm run cypress:run:firefox
    npm run cypress:run:edge
    npm run cypress:run:electron
    ```
These scripts utilize Cypress with Mochawesome reporter for generating detailed HTML reports in respective directories (cypress/reports/chrome, cypress/reports/firefox, cypress/reports/edge, cypress/reports/electron). The --headless flag ensures tests run without launching a browser window, suitable for automated CI/CD pipelines.

## Writing New Test Cases

When writing new test cases, follow these steps:

1. Create a New Spec File: Add a new .ts file in the cypress/e2e directory.
2. Use Page Objects: Leverage existing page objects to interact with the application.
3. Add Assertions: Ensure appropriate assertions are in place to validate the test flow.
4. Run and Validate: Execute the test locally to ensure it works as expected.

### Example - Adding a new test case:
```shell
// cypress/e2e/new-test.cy.ts
import LoginPage from '../page-objects/login-page';
import InventoryPage from '../page-objects/inventory-page';
import CartPage from '../page-objects/cart-page';
import CheckoutPage from '../page-objects/checkout-page';

describe('New Test Suite', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('should complete a new test flow', () => {
    cy.visit('/');
    loginPage.login('standard_user', 'secret_sauce');
    inventoryPage.addThreeRandomItemsToCart();
    cartPage.proceedToCheckout();
    checkoutPage.fillInCheckoutInformation('First', 'Last', '12345');
    checkoutPage.completeCheckout();
    cy.contains('Thank you for your order').should('be.visible');
  });
});
```

## CI/CD Using GitHub Actions
This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to ensure that the automated tests run smoothly and efficiently with every code change.

### Setting Up GitHub Actions
GitHub Actions are defined in YAML files located in the .github/workflows/ directory. The workflows are triggered on specific events, such as pushes to the repository or pull requests.

### Workflow Files
#### Add Secrets:

1. Go to your GitHub repository.
2. Navigate to Settings > Secrets and variables > Actions.
3. Click on New repository secret and add the following secrets:
    - username: Your Sauce Labs demo website username.
    - password: Your Sauce Labs demo website password.

Note: I have all redy addy in my GitHub Repo

#### Quality Workflow
The quality.yml workflow ensures code quality by running linting and formatting checks using ESLint and Prettier.
```shell
name: Quality Checks

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18.x'

    - name: Install dependencies
      run: npm install

    - name: Run ESLint
      run: npm run lint

    - name: Run Prettier
      run: npm run format
```
### E2E UI Testing Workflow
The sauce-demo-ui-cypress.yml workflow runs the Cypress end-to-end tests across multiple browsers.
```shell
name: Sauce Demo UI Cypress Tests

on:
  workflow_dispatch:
  pull_request:
    branches:
      - develop

jobs:
  sauce-demo-ui-cypress:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup NodeJS 18
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install
        run: npm ci

      - name: Run Sauce Demo UI Cypress Tests
        run: CYPRESS_username=${{ secrets.USERNAME }} CYPRESS_password=${{ secrets.PASSWORD }}  npm run cypress:run:all

      - name: Upload Cypress Videos
        if: always()
        uses: actions/upload-artifact@v2
        with:
          name: cypress-videos
          path: cypress/videos

      - name: Upload Cypress Screenshots
        if: always()
        uses: actions/upload-artifact@v2
        with:
          name: cypress-screenshots
          path: cypress/screenshots

      - name: Upload Cypress Reports
        if: always()
        uses: actions/upload-artifact@v2
        with:
          name: cypress-reports
          path: cypress/reports
```
#### Key Steps in the Workflow
- Triggers: The workflow runs on any push or pull request to the develop branch.
- Environment Variables: The CYPRESS_username and CYPRESS_password environment variables are set using the secrets added to the GitHub repository.
- Checkout: The code is checked out from the repository.
- Setup Node.js: Node.js version 18.7.0 is set up.
- Install Dependencies: The required dependencies are installed using npm install.
- Run Cypress Tests: The Cypress tests are executed across all specified browsers using the npm run cypress:run:all script.
#### Running the Tests using Github action and Viewing Reports
- No Need to Clone: There is no need to clone the code and run it - on your computer. You can directly go to the repository and run the GitHub Action.
- Run the Action: Once the action is completed, go to the workflow run tab.
- Download Reports: Download the report to see the results.

#### Configuring Environment Variables
Environment variables for your tests can be set up in the GitHub Actions workflow file to securely manage sensitive information such as usernames and passwords.

#### Running Workflows
The workflows are automatically triggered based on the events specified. You can also manually trigger workflows from the GitHub Actions tab in your repository.

By integrating GitHub Actions into your CI/CD pipeline, you ensure that your test suite is executed consistently with every change, maintaining code quality and reliability.