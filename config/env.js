// Sauce Demo config
const SAUCE_DEMO_BASE_URL = process.env.SAUCE_DEMO_BASE_URL;
const SAUCE_DEMO_USERNAME = process.env.SAUCE_DEMO_USERNAME;
const SAUCE_DEMO_PASSWORD = process.env.SAUCE_DEMO_PASSWORD;

const SAUCE_DEMO_URLS = {
  inventory: `${SAUCE_DEMO_BASE_URL}/inventory.html`,
  cart: `${SAUCE_DEMO_BASE_URL}/cart.html`,
  inventoryItemOnesie: `${SAUCE_DEMO_BASE_URL}/inventory-item.html?id=2`,
  inventoryItemRedTshirt: `${SAUCE_DEMO_BASE_URL}/inventory-item.html?id=3`,
  checkoutStepOne: `${SAUCE_DEMO_BASE_URL}/checkout-step-one.html`,
  checkoutStepTwo: `${SAUCE_DEMO_BASE_URL}/checkout-step-two.html`,
  checkoutComplete: `${SAUCE_DEMO_BASE_URL}/checkout-complete.html`
};

const SAUCE_DEMO_VALID_CREDENTIALS = {
  username: SAUCE_DEMO_USERNAME,
  password: SAUCE_DEMO_PASSWORD
};

module.exports = {
  // Sauce Demo config exports
  SAUCE_DEMO_BASE_URL,
  SAUCE_DEMO_URLS,
  SAUCE_DEMO_VALID_CREDENTIALS
};
