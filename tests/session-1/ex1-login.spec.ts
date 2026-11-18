import { test, expect } from '@playwright/test';

// Exercise 1 — Login
// Manual test case:
//   1. Open the login page (/auth/login)
//   2. Enter email customer@practicesoftwaretesting.com and password welcome01
//   3. Click "Login"
//   Expected: the "My account" page is shown
//
// Change test.fixme to test, then write the steps.
// Tip: the password field's label isn't connected to its input, so getByLabel won't find it.
//      Use the locator ladder: what's the next-best option? (Pick locator in UI mode helps.)

test.fixme('customer can log in and sees their account page', async ({ page }) => {
  // TODO 1: open the login page

  // TODO 2: fill in email and password

  // TODO 3: click the Login button

  // TODO 4: check the result — URL and page heading
});
