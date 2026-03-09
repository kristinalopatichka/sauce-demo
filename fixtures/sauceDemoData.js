const SAUCE_DEMO_ACCEPTED_USERS = [
  'standard_user',
  'locked_out_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user'
];

const SAUCE_DEMO_CHECKOUT_DATA = {
  firstName: 'DemoName',
  lastName: 'DemoLastName',
  zipPostalCode: '1000'
};

const SAUCE_DEMO_ERROR_MESSAGES = {
  invalidCredentials: 'Username and password do not match any user in this service'
};

module.exports = {
  SAUCE_DEMO_ACCEPTED_USERS,
  SAUCE_DEMO_CHECKOUT_DATA,
  SAUCE_DEMO_ERROR_MESSAGES
};
