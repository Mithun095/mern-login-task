# mern-login-task

# FILE STRUCTURE
'''
mern-login/
│
├── backend/
│   ├── app.js
│   ├── db.js
│   └── database.sql
│
└── frontend/
    └── (React app)
'''
---------------------------------------------
CREATE DATABASE mern_login;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);
----------------------------------------------

cd backend
npm init -y
npm install express pg cors

----
to run:
node app.js
-----------------------------------------------
npx create-react-app frontend
cd frontend
npm install react-router-dom

----
to run:
npm start