
// npx cypress run --record --key ce7bfafb-3b32-4b2a-ad72-2cf8f48ab196
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r3zdnt",
  experimentalStudio: true,
  viewportHeight: 660,
  viewportWidth: 1000,
  defaultCommandTimeout: 1000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
