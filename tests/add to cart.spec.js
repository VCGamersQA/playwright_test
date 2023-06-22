const { test, expect } = require("@playwright/test");

async function valid_login(page) {
    await page.goto("https://auth.vcgamers.io/login/marketplace?/");

    await page.locator("//input[@placeholder='Email']").fill("aknrandmm160@gmail.com");
    await page.locator("//input[@placeholder='Password']").fill("ariframadhan18");

    await page.getByRole('button', { name: 'Masuk' }).click();
}

test("add to chart", async ({ page }) => {
    await valid_login(page);
    await page.locator("(//div[@class='content-text-container'])[21]").click();
    await page.locator("//div[@class='d-flex product-information-container']").isVisible();

    await page.locator("//button[normalize-space()='Tambah Keranjang']").isVisible();
    await page.locator("//button[normalize-space()='Tambah Keranjang']").click();

    await page.locator("//h5[normalize-space()='Berhasil di Tambahkan ke Keranjang']").isVisible();
    await page.locator("//a[normalize-space()='Lihat Keranjang']").click();

    //async function scrollDown() {
    //  let isVisible = false;
    //while (!isVisible) {
    //  await page.evaluate(() => {
    //    window.scrollBy(0, 200);
    //});
    //isVisible = await buttonLocator.isVisible();
    //await page.waitForTimeout(500);
    //}
    //}

    //await scrollDown();

    //await buttonLocator.click();

});
