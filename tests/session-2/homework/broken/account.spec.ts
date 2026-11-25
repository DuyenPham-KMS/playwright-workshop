import { test, expect } from '@playwright/test';

// Session 2 homework — broken suite. Read homework/session-2/README.md first.

test.describe.fixme('homework · account', () => {
  test('a logged-in customer sees their name in the menu', async ({ page }) => {
    await page.goto('/auth/login');
    await page.getByLabel('Email address').fill('customer2@practicesoftwaretesting.com');
    await page.getByLabel('Password').fill(process.env.CUSTOMER_PASSWORD as string);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
    await expect(page.getByTestId('nav-menu')).toHaveText('Jack Howe');
  });
});
