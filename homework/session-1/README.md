# Session 1 homework — automate 3 manual test cases

**Due:** 48 hours before Session 2 · **Time:** about 1.5–2 hours
**Write your tests in:** `tests/session-1/homework.spec.ts` — one Playwright test per test case
**Submit:** a pull request from branch `hw/s1` (see the course README)

Each test must **pass**, and must **fail if the feature it checks is broken**. Before you submit, run `npm run selfcheck`.

---

## TC-01 — Login with a wrong password is rejected

| | |
|---|---|
| **Precondition** | Not logged in |
| **Steps** | 1. Open the login page (`/auth/login`) <br> 2. Enter email `customer@practicesoftwaretesting.com` and password `wrong-password` <br> 3. Click **Login** |
| **Expected result** | An error message "Invalid email or password" is shown, and the user stays on the login page |

## TC-02 — Product page shows the product's details

| | |
|---|---|
| **Precondition** | Not logged in |
| **Steps** | 1. Open the home page <br> 2. Click the product **Combination Pliers** |
| **Expected result** | The product page shows the heading "Combination Pliers", the price 14.15, and an enabled **Add to cart** button |

## TC-03 — Adding a product to the cart updates the cart

| | |
|---|---|
| **Precondition** | Not logged in, cart empty |
| **Steps** | 1. Open the product page for **Combination Pliers** (as in TC-02) <br> 2. Click **Add to cart** |
| **Expected result** | The message "Product added to shopping cart." appears, and the cart icon in the header shows **1** |

---

## What's scored

| Criterion | Weight |
|---|---|
| Tests run and pass | Gate |
| Locator quality (see the locator ladder) | 40% |
| Meaningful assertions — each test would fail if its feature broke | 30% |
| Steps match the test case | 20% |
| Clear test names | 10% |

## Hints

- Use **Pick locator** in UI mode (`npm run test:ui`) to see which locator Playwright suggests.
- Codegen (`npx playwright codegen http://45.77.169.70:4200`) helps you *find* locators — don't paste its whole recording.
- Don't navigate to a hard-coded product URL in TC-02: product ids can change when the data is reset. Click the product like a user would.
- Go through `docs/review-checklist.md` (Session 1 section) before you open the pull request.
