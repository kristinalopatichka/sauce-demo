# Bug Reporting 


## Checkout fields accept invalid special characters 

The checkout input fields First Name, Last Name, and Zip Code incorrectly accept all types of special characters. The application does not enforce restrictions on allowed characters, which results in invalid user data being accepted.

Severity: Medium 
Priority: High 
Environment: www.saucedemo.com / Any browser

Steps to reproduce: 

1. Log in to the application using valid credentials.
2. Add multiple products to the shopping cart.
3. Click on the Shopping Cart icon.
4. Click on the Checkout button.
5. In the First Name, Last Name, and Zip Code fields, enter various special characters (e.g. !@#$%^&*()_+<>?{}[]).
6. Click on the Continue button.

Expected result: Each field should validate user input and allow only specific character types:

First Name / Last Name: alphabetic characters (A–Z), optional hyphens or apostrophes
Zip Code: numeric characters only

Actual result: The application accepts all special characters without validation in all fields. The user is allowed to continue the checkout process with invalid data.



## Missing validation for required checkout fields

Checkout page validates only one field at a time instead of all required fields.

When completing the checkout process, all three input fields—First Name, Last Name, and Zip Code—are mandatory. 
However, the application displays a validation error message only for the first empty field it encounters.
If the user fills one field (e.g., First Name) and leaves the other two empty, only one validation message appears, instead of one message per missing required field.


Severity: Medium 
Priority: High 
Environment: www.saucedemo.com / Any browser

Steps to reproduce: 

1. Log in to the application using valid credentials.
2. Add multiple products to the cart.
3. Click on the Shopping Cart icon.
4. Click on the Checkout button.
5. Enter valid data only in the First Name field.
6. Leave the Last Name and Zip Code fields empty.
7. Click on the Continue button.

Expected result: Appropriate validation message should appear for each required field that is left empty. 

Last Name: field required
Zip Code: field required

Actual result: The application displays a validation error only for the first missing field (e.g., Last Name).
No validation message appears for the other required empty fields unless the user corrects the first error and retries.



## Login error message is too generic

When the user enters a valid username but an invalid password, the application displays a generic error message.
“Epic sadface: Username and password do not match any user in this service.”
The system does not specify which field (username or password) is incorrect.

Severity: Low 
Priority: Medium 
Environment: www.saucedemo.com / Any browser


Steps to reproduce: 

1. Navigate to https://www.saucedemo.com.
2. Enter a valid username in the Username field.
3. Enter an invalid password in the Password field.
4. Click the Login button.

Expected result: A field‑specific validation message should be displayed

Actual result: Generic error message is shown. The message does not indicate whether the username or password is incorrect, reducing clarity for the user.



## User cannot increase item quantity in the cart 

Unable to add more than one quantity of the same item to the cart. 
The application does not allow the user to add more than one quantity of the same product. Once the item is added to the cart, there is no option to increase its quantity.

Severity: Medium
Priority: Medium
Environment: 

Steps to reproduce: www.saucedemo.com / Any browser

1. Log in to the application using valid credentials.
2. Navigate to any product and click Add to Cart.
3. Open the Shopping Cart page.
4. Attempt to increase the quantity of the selected item (eg. add the same product again or adjust quantity).

Expected result: The user should be able to increase the quantity of the selected item
Actual result: The user cannot add more than one unit of any item.



## Missing payment method selection during checkout process

Severity: Medium
Priority: High
Environment: www.saucedemo.com / Any browser


During the checkout process, the system does not provide any option for selecting a payment method.
Once the user fills in the required personal information and proceeds to the next step, the application skips directly to the order overview screen without presenting any payment choices


Steps to reproduce:

1. Log in to the application.
2. Add multiple products to the shopping cart.
3. Click on the Checkout button.
4. Fill in the First Name, Last Name, and Zip Code fields.
5. Click Continue to proceed to the next checkout step.

Expected result: The system should display a payment method selection section, allowing the user to choose between available options 
Actual result: The system does not present any payment method selection options.