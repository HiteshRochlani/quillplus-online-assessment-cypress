const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://test-app.quillplus.in/"
  },
});
