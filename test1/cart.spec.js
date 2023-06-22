// @ts-check
const { test, expect } = require('@playwright/test');

test('login test', async ({ page }) => {
  await page.goto('https://auth.vcgamers.io/login');

  await page.locator('[placeholder="Email"]').fill('tokoa@mailinator.com');
  await page.locator('[placeholder="Password"]').fill('ciwkiciw');
  await page.locator('[class="btn-submit py-3 w-full mt-7 text-center font-semibold text-sm"]').click();
  await page.locator('#home-instant-slider-3 > div:nth-child(2) > a').click();
  await page.locator('#__layout > div > div.content-grid.pb-0.ptcustom > div > div.grid.grid-8-4.centered > div.marketplace-sidebar.side-sticky > div.sidebar-box > div > div.action-container.d-flex > div.add-cart.w-100 > button').click(); 

});
