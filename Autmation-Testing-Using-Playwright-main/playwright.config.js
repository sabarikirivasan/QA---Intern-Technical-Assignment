const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './test',

  timeout: 120000,           // 120 second test timeout
  expect: { timeout: 10000 }, // 10 second expectation timeout
  use: {
    headless: false,        // Opens the browser
    viewport: null,
    launchOptions: {
      slowMo: 10000,         // 1 second delay between actions
    },
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});