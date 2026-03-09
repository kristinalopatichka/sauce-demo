# Test cases - Home Page 


## Test cases -Intro

Because the SauceDemo application does not provide a built‑in search feature, I have written test cases centered on the Home Page. Further test scenarios covering additional modules should be developed to achieve complete functional coverage.


## Verify the name of each product  has the correct name

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps:

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Check the title of a random product 


**Expected result:** The product names are displayed with a format like : "Sauce Labs" + "The product name" 



## Verify the price of each product has appropriate price format

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Check the price of a random product 

**Expected result:** The price of the products should contain the following format: "$XX.XX"



## Verify the description of each product has correct details

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Check the description of a random product

**Expected result:** All product descriptions are related to the products. 



## Verify Name (A to Z) sorting

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the sorting dropdown option
6. Select Name (A to Z) sorting

**Expected result:** Products should be sorted alphabetically in ascending order (A-Z)



## Verify Name (Z to A) sorting

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the sorting dropdown option
6. Select Name (Z to A) sorting

**Expected result:** Products should be sorted alphabetically in descending order (Z-A)



## Verify Price (low to high) sorting

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the sorting dropdown option
6. Select (low to high) sorting

**Expected result:** Products should be sorted by price in ascending order (lowest to highest)



## Verify Price (high to low) sorting

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the sorting dropdown option
6. Select (high to low) sorting


**Expected result:** Products should be sorted by price in ascending order Price (high to low)



## Verify the functionality of adding to cart 

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the 'Add to cart' button for each product


**Expected result:**  The product should be added to the cart successfully and the button "Add To Cart "is converted to a  "Remove" button with red name and border and a number of element added should appear on cart icon.



## Verify the functionality of removing from a cart

Precondition: The user has been successfully logged in using valid credentials. The user has previously added a product to a cart. 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the 'Remove' button


**Expected result:** The product should be removed from the cart and the button "Remove" should return to "Add to cart button" and the number that appear on the cart icon should decrease by 1 .



## Verify the burger menu functionality

Precondition: The user has been successfully logged in using valid credentials 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the menu icon from the left side


**Expected result:** The side menu contains the following cards:  "All items" , "About" ,"Logout", "Reset App State".



## Verify the functionality of the cart icon

Precondition: The user has been successfully logged in using valid credentials. 
Test data: username: standard_user / password: secret_sauce

Steps: 

1. Navigate to the URL 
2. Add valid username 
3. Add valid password
4. Click on the Login button
5. Click on the Cart icon 


**Expected result:** The user should be redirected to Cart page succesfully