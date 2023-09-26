import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', '__test__/**/*.cy.{js,jsx,ts,tsx}'],
  },
});
