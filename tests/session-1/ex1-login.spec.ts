import { test, expect } from '@playwright/test';

// Exercise 1 — Login
// Manual test case:
//   1. Open the login page (/auth/login)
//   2. Enter email customer@practicesoftwaretesting.com and password welcome01
//   3. Click "Login"
//   Expected: the "My account" page is shown
//
// Change test.fixme to test, then write the steps.
// Tip: both fields have proper labels — start at the top of the locator ladder.
//      Pick locator in UI mode shows you what Playwright suggests.

test.fixme('customer can log in and sees their account page', async ({ page }) => {
  // TODO 1: open the login page

  // TODO 2: fill in email and password

  // TODO 3: click the Login button

  // TODO 4: check the result — URL and page heading
});
