const { test: base, expect } = require('@playwright/test');

const test = base.extend({
  page: async ({ page, baseURL }, use) => {
    await page.route('**/*', (route) => {
      const url = route.request().url();
      const blocked = ['google-analytics', 'doubleclick', 'googleadservices', 'facebook.net'];
      blocked.some(d => url.includes(d)) ? route.abort() : route.continue();
    });
    if (baseURL) await page.goto('/');
    await use(page);
  }
});

module.exports = { test, expect };