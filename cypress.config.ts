import { defineConfig } from 'cypress'

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 120000, 
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    includeLogs: true,
    charts: true,
    reportPageTitle: 'Automation - Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: false,
    overwrite: true,
    html: true,
    json: true,
  },
  env: {
    CI: true,
    HEADLESS: true
  },
  e2e: {
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      viewport:'macbook-15'
    },
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on: any, config: any) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // Set up the 'task' event
      on('task', { log(message) { console.log(message); return null; } });
    }
  }
})