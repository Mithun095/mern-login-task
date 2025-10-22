# MERN Login Task

A simple MERN stack project demonstrating **login and signup functionality** using **React** and **PostgreSQL**.  
Backend is built with **Express.js**, and frontend is a **React app**.

---

## 📁 File Structure

```

mern-login/
│
├── backend/
│   ├── app.js
│   ├── db.js
│   └── database.sql
│
└── frontend/
└── (React app)

````

---

## 🗄️ Database Setup

1. Create the database:

```sql
CREATE DATABASE mern_login;
````

2. Create the `users` table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);
```

---

## ⚙️ Backend Setup

```bash
cd backend
npm init -y
npm install express pg cors
```

### To run the backend:

```bash
node app.js
```

---

## ⚛️ Frontend Setup

```bash
npx create-react-app frontend
cd frontend
npm install react-router-dom
```

### To run the frontend:

```bash
npm start
```

---

## ✅ Usage

1. Open the **signup page** to create a new user.
2. Use the **login page** to authenticate with your email and password.
3. After successful login, you will be redirected to the **home page**.
4. Click **Logout** to return to the login page.

```

---

If you want, I can also add a **table of API endpoints** in the README (`/signup`, `/login`, `/home`) so it looks very **professional for submission**.  

Do you want me to add that?
```
