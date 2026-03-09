const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { SAUCE_DEMO_URLS, SAUCE_DEMO_VALID_CREDENTIALS } = require('../config/env');
const { SAUCE_DEMO_CHECKOUT_DATA } = require('../fixtures/sauceDemoData');

test('User can complete shopping with products added in cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.login(SAUCE_DEMO_VALID_CREDENTIALS.username, SAUCE_DEMO_VALID_CREDENTIALS.password);
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);

  // Reuse the already-defined product flow so both products exist in cart.
  await inventoryPage.addDefaultProductsToCart();

  await checkoutPage.openCart();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.cart);

  await expect(inventoryPage.productSauceLabsOnesie).toBeVisible();
  await expect(inventoryPage.productRedTshirt).toBeVisible();

  await checkoutPage.clickCheckout();
  await checkoutPage.fillFirstName(SAUCE_DEMO_CHECKOUT_DATA.firstName);
  await checkoutPage.fillLastName(SAUCE_DEMO_CHECKOUT_DATA.lastName);
  await checkoutPage.fillZipPostalCode(SAUCE_DEMO_CHECKOUT_DATA.zipPostalCode);
  await checkoutPage.clickContinue();

  await expect(page).toHaveURL(SAUCE_DEMO_URLS.checkoutStepTwo);

  await checkoutPage.clickFinish();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.checkoutComplete);
  await expect(checkoutPage.thankYouHeading).toBeVisible();

  await checkoutPage.clickBackHome();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);
});

test('User cannot checkout without filling out required fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.login(SAUCE_DEMO_VALID_CREDENTIALS.username, SAUCE_DEMO_VALID_CREDENTIALS.password);
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);

  await inventoryPage.addDefaultProductsToCart();

  await checkoutPage.openCart();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.cart);

  await checkoutPage.clickCheckout();
  await checkoutPage.fillLastName(SAUCE_DEMO_CHECKOUT_DATA.lastName);
  await checkoutPage.fillZipPostalCode(SAUCE_DEMO_CHECKOUT_DATA.zipPostalCode);
  await checkoutPage.clickContinue();

  await expect(checkoutPage.firstNameRequiredErrorHeading).toBeVisible();
});

test('User should not be able to successfully checkout when filling invalid Zip Code', async ({ page }) => {
  // Marking test as failed when checkout accepts invalid Zip/Postal Code values and continues to CheckoutStepTwo.
  // test.fail(true, 'Bug: checkout currently accepts invalid Zip/Postal Code values -> fails this test on purpose.');

  const loginPage = new LoginPage(page);
  const inventoryPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.login(SAUCE_DEMO_VALID_CREDENTIALS.username, SAUCE_DEMO_VALID_CREDENTIALS.password);
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);

  // Reuse the already-defined product flow so both products exist in cart.
  await inventoryPage.addDefaultProductsToCart();

  await checkoutPage.openCart();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.cart);

  await expect(inventoryPage.productSauceLabsOnesie).toBeVisible();
  await expect(inventoryPage.productRedTshirt).toBeVisible();

  await checkoutPage.clickCheckout();
  await checkoutPage.fillFirstName(SAUCE_DEMO_CHECKOUT_DATA.firstName);
  await checkoutPage.fillLastName(SAUCE_DEMO_CHECKOUT_DATA.lastName);
  await checkoutPage.fillZipPostalCode(SAUCE_DEMO_CHECKOUT_DATA.lastName);
  await checkoutPage.clickContinue();

  // Desired behavior: invalid Zip/Postal Code should block checkout progression.
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.checkoutStepOne);
});
