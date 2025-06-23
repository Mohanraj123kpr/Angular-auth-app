📘 Angular Authentication App

A simple authentication system built with Angular that supports:

Login

Signup

Forgot Password

Dashboard View (Post Login)

Basic form validation

LocalStorage-based user storage


🚀 Features

🔐 Login with email/password.

📝 Signup with password confirmation and validation.

🔁 Forgot Password functionality to reset password.

✅ Form validation with helpful error messages.

🗂️ LocalStorage used to store encoded user data.

📌 Dashboard welcome message with user email.

🛠️ How It Works

Users register with email and password.

Data is encoded using btoa() and stored in localStorage using the email as key.

On login, the email and password are verified against stored records.

Forgot Password resets the password after email verification.

Upon successful login, user is redirected to the Dashboard with a welcome message.

✅ Setup & Run

Install dependencies
    
npm install

Run the application

ng serve

Navigate to http://localhost:4200/ in your browser.

🔍 Validation Rules
Email must be valid and end with .com, .in, .co, .org, or .net.

Password must be at least 6 characters.

Signup ensures passwords match.

Forgot Password verifies existing email before allowing reset.

📦 Notes
No backend is involved. This is frontend-only with basic authentication simulation.

User credentials are stored locally, encoded with base64 (for demo only – not secure for production).

📄 License
This project is open-source and free to use for educational and demo purposes.