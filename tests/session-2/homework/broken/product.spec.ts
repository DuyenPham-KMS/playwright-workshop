import { test, expect, type Page } from '@playwright/test';

// Session 2 homework — broken suite. Read homework/session-2/README.md first.

let page: Page;

test.describe.fixme('homework · product', () => {
  test.beforeAll(async ({ browser }, testInfo) => {
    page = await browser.newPage({ baseURL: testInfo.project.use.baseURL });
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Thor Hammer product page shows its price', async ({ page }) => {
    // URL copied from the address bar while writing this test
    await page.goto('/product/01HXA3R7Q2M8VZK4T6N9B1C5DE');

    await expect(page.getByTestId('product-name')).toHaveText('Thor Hammer');
    await expect(page.getByTestId('unit-price')).toHaveText('11.14');
  });

  test('opening Claw Hammer shows its product page', async () => {
    await page.goto('/');
    await page.getByTestId('product-name').filter({ hasText: /^\s*Claw Hammer\s*$/ }).click();

    await expect(page.getByTestId('product-name')).toHaveText('Claw Hammer');
  });

  test('the open product can be added to the cart', async () => {
    await page.getByTestId('add-to-cart').click();

    await expect(page.getByTestId('cart-quantity')).toHaveText('1');
  });
});
