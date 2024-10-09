# 🚀 Login and Signup Backend

This project implements a backend for user authentication using **JWT (JSON Web Tokens)** for secure access, **bcrypt** for password hashing, and **Joi** for server-side validation of request data.

## ✨ Features

- 🔐 **User Registration**: Allows new users to sign up with email, password, and username. Passwords are securely hashed using bcrypt.
- 🔑 **User Login**: Allows users to log in with valid credentials. On successful login, a JWT token is generated and returned.
- 🛡️ **Token-Based Authentication**: Authenticated routes are secured using JWT.
- 🧹 **Data Validation**: Request data (e.g., email, password) is validated using Joi to ensure the correct format.

## 🛠️ Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building the API
- **JWT (jsonwebtoken)**: Token-based authentication
- **bcrypt**: Password hashing for security
- **Joi**: Server-side validation library for validating inputs

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=your_port_number
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

## 📋 API Endpoints

### 1. **📝 Register User**

- **URL**: `/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user and stores their hashed password in the database.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "username": "username",
    "password": "password"
  }
  ```
- **Validation**:
  - ✉️ **Email**: Must be a valid email format.
  - 🔒 **Password**: Minimum of 8 characters.
  - 🆔 **Username**: Must be alphanumeric and 3-30 characters long.
  
- **Response**: On success, returns a success message or the registered user data.

### 2. **🔐 Login User**

- **URL**: `/auth/login`
- **Method**: `POST`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```
- **Validation**:
  - ✉️ **Email**: Must be valid.
  - 🔒 **Password**: Required, no restrictions for length (but bcrypt hashes it).

- **Response**: On success, returns a JWT token.

### 3. **🔒 Protected Routes**

- Use the JWT token to access routes that require authentication.
- Pass the token in the `Authorization` header as `Bearer <token>`.

## ⚙️ How It Works

1. **User Registration**:
   - 🧹 User data is validated using **Joi**.
   - 🔐 Password is hashed using **bcrypt** before storing in the database.
   - On successful registration, a success message or user data is returned.

2. **User Login**:
   - 🧹 Email and password are validated using **Joi**.
   - 🔒 The password is compared with the hashed password using **bcrypt**.
   - If the credentials are valid, a **JWT token** is generated and sent in the response.

3. **Token Authentication**:
   - 🔑 Protected routes require the user to send the JWT token in the request headers.
   - The token is verified using the secret (`JWT_SECRET`), and if valid, the request is processed.

## 📁 Project Structure

```
/project-root
│
├── /models             # Database models (e.g., User schema)
├── /routes             # Route handlers for authentication
├── /controllers        # Business logic for each route
├── /middleware         # JWT middleware for protected routes
├── /utils              # Utility functions (e.g., password hashing, token generation)
├── .env                # Environment variables
├── app.js              # Main entry point for the server
└── package.json        # Project metadata and dependencies
```

## 📚 Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `jsonwebtoken`: For creating and verifying JWT tokens
- `bcrypt`: Password hashing library
- `joi`: For schema-based input validation

## 📄 License

This project is licensed under the MIT License.
