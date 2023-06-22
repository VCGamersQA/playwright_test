const { test, expect } = require("@playwright/test");

test("valid_login", async ({ page }) => {
  await page.goto("https://auth.vcgamers.io/login/marketplace?/")

  await page.locator("//input[@placeholder='Email']").fill("aknrandmm160@gmail.com")
  await page.locator("//input[@placeholder='Password']").fill("ariframadhan18")

  await page.getByRole('button', { name: 'Masuk' }).click()
  await expect(page).toHaveURL('https://app.vcgamers.io/')
  await page.close();
});


test("invalid login wrong email or password", async ({ page }) => {
  await page.goto("https://auth.vcgamers.io/login/marketplace?/")

  await page.locator("//input[@placeholder='Email']").fill("aknrandmm16@gmail.com")
  await page.locator("//input[@placeholder='Password']").fill("ariframadhan18")

  await page.getByRole('button', { name: 'Masuk' }).click()

  await expect(page.getByText('Email atau password anda salah')).toBeVisible()

  await page.close();
});

test("invalid login random character", async ({ page }) => {
  await page.goto("https://auth.vcgamers.io/login/marketplace?/")

  await page.locator("//input[@placeholder='Email']").fill("aknrandmm162")
  await page.locator("//input[@placeholder='Password']").fill("ariframadhan18")

  await page.getByRole('button', { name: 'Masuk' }).click()

  await expect(page.getByText('Pastikan email yang kamu tulis sudah benar')).toBeVisible()

  await page.close();
});
