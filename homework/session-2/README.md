# Session 2 homework — fix a broken suite, then write 3 strong tests

**Due:** 48 hours before Session 3 · **Time:** about 2–3 hours
**Submit:** a pull request from branch `hw/s2` (see the course README)

The homework has two parts. Both are different from the in-class exercises: new features, new kinds of breakage.
Before you submit, run `npm run selfcheck`.

---

## Part 1 — Fix the broken suite

**Files:** `tests/session-2/homework/broken/` (4 files, 6 tests)

1. In each file, change `test.describe.fixme` to `test.describe`.
2. Run the suite and read every failure (error message, HTML report, trace):
   ```bash
   npx playwright test session-2/homework/broken --project=chromium
   ```
3. Fix each test **at its cause**. Above every test you change, add one comment line:
   ```ts
   // CAUSE: timing — read the first product name once, before the sorted list had loaded
   ```
   The cause is one of **timing**, **data**, **order** or **environment** (see the Session 2 slides).
4. Prove the suite is reliable — every test must pass **20 out of 20**, in random order:
   ```bash
   npx playwright test session-2/homework/broken --project=chromium --repeat-each=20
   npx playwright test session-2/homework/broken --project=chromium --shuffle
   ```

Rules:

- **No hard waits** of any kind — not `waitForTimeout`, and not a `setTimeout` promise either.
- **No retries or longer timeouts** to make a test pass, in the config or in the test.
- Keep what each test checks. A "fix" that deletes the assertion is not a fix.
- If a test needs a password, it must work on a fresh clone of the repo with no `.env` file, and still allow an override from `.env`. Document any new variable in `.env.example`.

> Hint: at least one test fails only when it runs in a different worker from another test.
> Try `--workers=1` and then the default — what changes?

---

## Part 2 — Three new tests

**File:** `tests/session-2/homework/new-tests.spec.ts` — one Playwright test per test case.

Each test must **pass**, and must **fail if the feature it checks is broken**. Above each test, write how you checked that:

```ts
// Can fail: commented out the Register click — the error checks failed.
```

### TC-05 — Registration form explains what is missing or invalid

| | |
|---|---|
| **Steps** | 1. Open the login page and follow **Register your account** <br> 2. Click **Register** without filling anything in <br> 3. Enter Email `not-an-email` and Password `abc`, then click **Register** again <br> 4. Correct the email to a valid address and the password to `SuperSecure@123` |
| **Expected result** | After step 2: "First name is required", "Email is required" and "Password is required" are shown (among others). <br> After step 3: "Email format is invalid" and "Password must be minimal 6 characters long." are shown. <br> After step 4: the email and password errors are gone. |

> Don't actually register — that creates a user on the shared server. This test stops before submitting valid data.

### TC-06 — A customer can add a favourite and remove it again

| | |
|---|---|
| **Steps** | 1. Log in as `customer3@practicesoftwaretesting.com` / `pass123` <br> 2. Open the product **Thor Hammer** (find it like a user would) and click **Add to favourites** <br> 3. Open **My favorites** from the account menu <br> 4. Remove Thor Hammer from the favourites |
| **Expected result** | After step 2: "Product added to your favorites list." appears. <br> After step 3: Thor Hammer is listed. <br> After step 4: "There are no favorites yet." is shown. |

> This account is shared by the whole cohort, and a favourite can only be added once
> (try clicking **Add to favourites** twice by hand). Your test must pass whatever state the account is in when it starts,
> and leave it clean when it ends.

### TC-07 — A logged-in customer isn't asked for their name and email on the contact form

| | |
|---|---|
| **Steps** | 1. Open **Contact** while **not** logged in <br> 2. Log in as `customer@practicesoftwaretesting.com` / `welcome01` <br> 3. Open **Contact** again |
| **Expected result** | After step 1: First name, Last name and Email address fields are shown. <br> After step 3: those three fields are **not** shown, but Subject and Message still are. |

> Step 1 is there on purpose. Remember the "not trap" from the slides: a check that something is hidden passes
> even when your locator is wrong — so first prove the same locator finds the field.

---

## What's scored

| Criterion | Weight |
|---|---|
| Broken suite passes reliably (20/20 with `--repeat-each=20`, and with `--shuffle`) | Gate |
| Assertion quality — every test fails when its feature breaks | 40% |
| Correct root-cause fixes, with a CAUSE comment that names the real cause | 30% |
| No hard waits; web-first assertions | 20% |
| Clear test names and comments | 10% |

From this session on, a test that only passes on a re-run counts as **flaky** and loses points.

## Hints

- Read the error **top to bottom** before you open any tool: what was checked, expected vs received, which line.
- Traces: the course config records them only on retry, and local runs don't retry. Add `--trace on` to the command
  instead of editing `playwright.config.ts` (the grader compares it with the template).
- A one-time read (`textContent()`, `innerText()`, `isVisible()`, `count()`) followed by `expect(value)` does not wait.
  `await expect(locator).toHaveText(…)` does.
- Go through `docs/review-checklist.md` (Sessions 1 and 2) before you open the pull request.
