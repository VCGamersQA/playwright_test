// @ts-check
const { test, expect } = require('@playwright/test');

test('login test', async ({ page }) => {
  await page.goto('https://auth.vcgamers.io/login');

  await page.locator('[placeholder="Email"]').fill('tokoa@mailinator.com');
  await page.locator('[placeholder="Password"]').fill('ciwkiciw');
  await page.locator('[class="btn-submit py-3 w-full mt-7 text-center font-semibold text-sm"]').click();

});

