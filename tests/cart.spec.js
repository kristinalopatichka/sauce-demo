const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { CartPage } = require('../pages/CartPage');
const { SAUCE_DEMO_URLS, SAUCE_DEMO_VALID_CREDENTIALS } = require('../config/env');

test('User can add product to cart and remove it', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login(SAUCE_DEMO_VALID_CREDENTIALS.username, SAUCE_DEMO_VALID_CREDENTIALS.password);
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);

  await expect(cartPage.productBoltTshirt).toBeVisible();
  await cartPage.clickAddBoltTshirtToCart();
  await cartPage.openShoppingCart();

  await expect(page).toHaveURL(SAUCE_DEMO_URLS.cart);
  await expect(cartPage.productBoltTshirt).toBeVisible();

  await cartPage.clickRemoveProduct();
  await expect(cartPage.productBoltTshirt).not.toBeVisible();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.cart);
});
