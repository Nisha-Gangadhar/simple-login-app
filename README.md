# simple-login-app
Login Page with Authentication and Responsiveness

This project implements a login page with the following features:

Social Login Options: "Login with Google" and "Login with Facebook" (no action required).
Login Form: Fields for username, email, and password with proper placeholders and icons.
The username accepts only "emilys".
Validation for email format and password length.
A "Remember Me" checkbox and a "Forgot Password?" link.
A login button styled according to the design, with a "Register" link for new users.
Validation & API Integration: The login form is validated, and valid credentials are sent to the dummyjson.com/auth/login API. The authentication token and user data are stored in localStorage for session persistence. If the user is already authenticated, they are automatically redirected to the main page.
Logout Functionality: A logout button on the main page that clears user data from localStorage and redirects to the login page.
Responsiveness: The page is fully responsive and adapts to desktop, tablet, and mobile screen sizes.
The application utilizes React for the frontend and includes routing, validation, and API integration.
