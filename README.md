

### Trust Farms

Trust Farms is an e-commerce website for selling various types of fruits and vegetables. This project is built using React and Firebase, and it is hosted on Vercel.

### Features

--User Authentication
    *Sign up with email and password
    *Social media sign-up (Google)

--Product Listings
    *Display various fruit and  vegetable products
    *Search and filter products

--Shopping Cart
    *Add products to the cart
    *View and manage cart items

--Responsive Design
    *Works well on both mobile, tab, and desktop devices
    
--Secure Passwords:
    *Passwords are validated for security, ensuring they meet specific criteria.

### Demo
    You can see the live demo of the project Trust-Farms.
    https://trust-farms.vercel.app/

### Technologies Used
    *React: JavaScript library for building user interfaces
    *Routing: React Router Dom
    *State Management: Context API
    *Firebase: Backend as a service for authentication and data storage
    *Hosting: Vercel
    *CSS Modules: CSS for scoped and modular styles
    *SweetAlert2: Library for creating beautiful alerts and models


### Installation
To run this project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/rashidulislamg71/Trust-Farms.git
cd Trust-Farms

2. Install dependencies:
npm install

3. Set up Firebase Configuration:
Create a Firebase project at Firebase Console.
Copy the Firebase SDK configuration into `src/Firebase/Firebase.Config.js`.

4. Run the project
npm start


### Usage
User Sign Up
    To create a new account, users need to fill out the sign-up form. The form includes fields for username, email, password, and confirm password. The password is validated to ensure it meets the security criteria:


const signUpWithEmailPassword = async (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;

  const passwordValidation = (password) => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill in all fields");
  } else if (password !== confirmPassword) {
    setEmpty("Passwords do not match!");
  } else if (!passwordValidation(password)) {
    setEmpty(
      "Password must be at least 6 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character!"
    );
  } else {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: username });
  }
};

### Deployment
The project is hosted on Vercel. Follow these steps to update or redeploy it:

1. Install Vercel CLI:
npm install -g vercel

2. Deploy the project:
vercel

 ### Contact
For questions or feedback:
    *Email:jrashidulislam0103@gmail.com
    *GitHub: rashidulislamg71



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
