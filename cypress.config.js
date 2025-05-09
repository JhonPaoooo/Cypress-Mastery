
// npx cypress run --record --key ce7bfafb-3b32-4b2a-ad72-2cf8f48ab196
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r3zdnt",
  experimentalStudio: true,
  //viewportHeight: 660,
  //viewportWidth: 1000,
  defaultCommandTimeout: 1000,
  // retries: 6,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    //excludeSpecPattern: ['cypress/e2e/postman-api/*'],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // implement node event listeners here
      on('before:run', async (details) => {
        console.log('override before:run');
        console.log('Running tests');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});
