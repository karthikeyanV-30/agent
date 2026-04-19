// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30 * 1000,

  fullyParallel: true,

  // workers: process.env.CI ? 2 : 4,

  // retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  use: {
    baseURL: 'https://formy-project.herokuapp.com/',

    headless: false,

    viewport: null,
    
    launchOptions: {
      args: ['--start-maximized']
    },

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 10 * 1000,

    navigationTimeout: 15 * 1000
  },

  projects: [
    {
      name: 'Chromium - QA - Karthikeyan V',
      use: { browserName: 'chromium' }
    }
    // {
    //   name: 'Firefox - QA - Karthikeyan V',
    //   use: { browserName: 'firefox' }
    // },
    // {
    //   name: 'WebKit - QA - Karthikeyan V',
    //   use: { browserName: 'webkit' }
    // }
  ]
});
