import { test, expect } from '@playwright/test';

// Session 2 homework — broken suite. Read homework/session-2/README.md first.
// Change test.describe.fixme to test.describe, then make every test pass reliably.

test.describe.fixme('homework · sort', () => {
  test('sorting by name Z to A puts Wood Saw first', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('sort').selectOption('Name (Z - A)');

    const firstName = await page.getByTestId('product-name').first().textContent();
    expect(firstName?.trim()).toBe('Wood Saw');
  });
});
