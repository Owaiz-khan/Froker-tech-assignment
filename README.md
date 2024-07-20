# Froker-tech-assignment
Froker tech assignment for MERN stack developer
A backend for a money lending application, similar to apps like Slice and KreditBee.
Implement the following 4 APIs using MongoDB, Postman, and Node.js.

Task 1:
1. Approve Application During Signup
Endpoint: POST /signup
Functionality:
● Approve or reject the application based on user age and monthly salary.
● Register the user after all verification.
● Maintain a status field to handle the user application status.
User Signup Details:
● Phone number
● Email
● Name
● Date of user registration
● Date of birth (DOB)
● Monthly salary
Validation Criteria:
● User should be above 20 years of age.
● Monthly salary should be 25k or more.

Screenshot of succesful registration:

![Screenshot 2024-07-20 164102](https://github.com/user-attachments/assets/adbfe2a1-8e6e-46a8-82c9-a9115b72e4c1)

Screetshot of validation when age is below 20 years:

![Screenshot 2024-07-20 164410](https://github.com/user-attachments/assets/6db8d22e-fb4c-4e7a-bed8-a81d6ce9ce4d)

Screenshot of validation for monthly salary:

![Screenshot 2024-07-20 164311](https://github.com/user-attachments/assets/5ee16ab9-a4b3-4ae5-b01d-cd40d3f00fed)

Task 2 :
2. Login API
Endpoint: POST /login
Functionality:
● Allow user to login using email and password.
● Use JWT for authentication.

Screenshot after logging in using email and password and JWT for authentication:

![Screenshot 2024-07-20 164506](https://github.com/user-attachments/assets/ec581b9c-1a72-423f-8aad-8166081a3548)

Task 3 :
3. Show User Data
Endpoint: GET /user
Functionality:
● Show user data with the following fields:
○ Purchase Power amount
○ Phone number
○ Email
○ Date of user registration
○ DOB
○ Monthly salary

Screenshot of showing the user data:

![Screenshot 2024-07-20 164653](https://github.com/user-attachments/assets/46e019ad-6213-4646-ba8f-c9b0f644f657)

Task 4 :
4. Borrow Money API
Endpoint: POST /borrow
Functionality:
● Allow the user to borrow money from the application.
● Update the Purchase Power amount.
● Calculate the tenure of repayments and the monthly repayments with an interest rate of 8%.
● Return the updated Purchase Power amount and the monthly repayment amount.

Screenshot of Borrowing money and the displaying of purchase power amount and the monthly repayments:
![Screenshot 2024-07-20 164831](https://github.com/user-attachments/assets/3f0ddd79-6762-4c79-9b86-18dc59577cc5)

"The assignment has been completed with all the specified tasks and functionalities. I am attaching all the screenshots and code for the assignment. Thank you."
- owaiz khan


