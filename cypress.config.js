const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Define your base URL, supportFile, and other configurations
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    fixturesFolder: false,
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true
    },
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config);
      // IMPORTANT: Always return the config object from setupNodeEvents
      return config;
    },
  },
});
