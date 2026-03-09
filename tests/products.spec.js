const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { SAUCE_DEMO_URLS, SAUCE_DEMO_VALID_CREDENTIALS } = require('../config/env');

test('User can filter, open products, and add them to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new ProductsPage(page);

  await loginPage.login(SAUCE_DEMO_VALID_CREDENTIALS.username, SAUCE_DEMO_VALID_CREDENTIALS.password);
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);

  await inventoryPage.selectRandomFilterOption();

  await inventoryPage.clickSecondFilteredItem();
  await expect(page).toHaveURL(/\/inventory-item\.html\?id=\d+$/);

  await inventoryPage.clickAddToCart();
  await inventoryPage.clickBackToProducts();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);

  await inventoryPage.clickRedTshirtProduct();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventoryItemRedTshirt);

  await inventoryPage.clickAddToCart();
  await inventoryPage.clickBackToProducts();
  await expect(page).toHaveURL(SAUCE_DEMO_URLS.inventory);
});
