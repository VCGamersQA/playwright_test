// @ts-check
const { test, expect } = require('@playwright/test');

test('invalid login test', async ({ page }) => {

  await page.goto('https://app.vcgamers.io/')

  await page.locator('[class="button primary"]').click();

  await page.locator('[placeholder="Email"]').fill('tokoa@mailinator.com');
  await page.locator('[placeholder="Password"]').fill('ciwkiwawa');
  await page.locator('[class="btn-submit py-3 w-full mt-7 text-center font-semibold text-sm"]').click();

  // Expect the URL to remain on the login page
  await expect(page.url()).toBe('https://app.vcgamers.io/');
});
