# Sauce Demo - Playwright Test Suite

This folder contains an end-to-end test suite for [Sauce Demo](https://www.saucedemo.com) using Playwright and the Page Object Model (POM) pattern.

## What is Covered

- Login scenarios (`tests/login.spec.js`)
- Product browsing and cart actions (`tests/products.spec.js`, `tests/cart.spec.js`)
- Checkout flow and validations (`tests/checkout.spec.js`)

## Project Structure

- `config/env.js`: Environment values and Sauce Demo URLs/credentials
- `fixtures/sauceDemoData.js`: Test data and expected error messages
- `pages/`: Page Object classes (`LoginPage`, `ProductsPage`, `CartPage`, `CheckoutPage`)
- `tests/`: Playwright test specs

## Prerequisites

- Node.js 18+
- npm

## Installation

From workspace root (`c:\git`):

```bash
npm install
npx playwright install
```

## Environment Variables

The suite uses these variables defined as environment variables in `config/env.js`:

- `SAUCE_DEMO_BASE_URL`
- `SAUCE_DEMO_USERNAME`
- `SAUCE_DEMO_PASSWORD`

Mandatory: Add environment variables using your Powershell terminal

```powershell
$env:SAUCE_DEMO_BASE_URL = "https://www.saucedemo.com"
$env:SAUCE_DEMO_USERNAME = "demousername"
$env:SAUCE_DEMO_PASSWORD = "demopassword"
```

## Run Tests

Then, from `sauce-demo` folder (ex. `C:\git\sauce-demo`):

```powershell
npx playwright test
```

Run with Playwright UI mode:

```powershell
npx playwright test --ui
```

Run headed mode:

```powershell
npx playwright test --headed
```


## Reports

After execution:

```powershell
npx playwright show-report
```

# GitHub Actions

This project includes a manual Playwright workflow at `.github/workflows/RunTests.yaml`.

- Workflow name: `Playwright Tests`
- Trigger: `workflow_dispatch` (manual run from GitHub Actions tab)
- Runner: `ubuntu-latest`
- Timeout: `10` minutes

## Required Repository Settings

Should be Configured before running the workflow:

- Repository variable: `SAUCE_DEMO_BASE_URL`
- Repository secret: `SAUCE_DEMO_USERNAME`
- Repository secret: `SAUCE_DEMO_PASSWORD`

## What the Workflow Does

1. Checks out the repository.
2. Sets up Node.js (`lts/*`).
3. Installs dependencies with `npm ci`.
4. Installs Playwright browsers with `npx playwright install --with-deps`.
5. Executes tests with `npx playwright test`.
6. Uploads artifacts:
- `test-results` from `test-results/**`
- `results` from `playwright-report/results.html`

# Notes

- Tests follow a POM approach to keep selectors and actions reusable.
- One checkout scenario is intentionally marked as expected failure (`test.fail(...)`) to track a known validation issue.