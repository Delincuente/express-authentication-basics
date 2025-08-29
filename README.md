# Express Authentication Basics

This repository demonstrates how to implement **basic authentication** in an Express.js application using MongoDB, bcryptjs, and JWT.

---

## 🚀 Features

- User **signup** with validation
- Password **hashing** using `bcryptjs`
- User **login** with email & password
- **JWT authentication** for securing private routes
- Middleware to **protect routes** from unauthorized access
- MongoDB (Mongoose) integration

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Mongoose** (MongoDB ODM)
- **bcryptjs** (password hashing)
- **jsonwebtoken** (JWT authentication)
- **express-validator** (input validation)
- **dotenv** (environment variables)

---

## ⚙️ Installation & Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/Delincuente/express-authentication-basics.git
   cd express-authentication-basics
2. Install dependencies
   ```bash
    npm install
3. Configure environment variables(.env)
   ```bash
   PORT=your_port_number
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
4. Run project
   ```bash
   npm run dev