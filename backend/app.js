const express = require('express');
const pool = require('./db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// SIGNUP
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password],
    (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ err: 'User creation failed' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    }
  );
});

// LOGIN
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  pool.query('SELECT * FROM users WHERE email = $1', [email], (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ err: 'Database error' });
    }

    if (result.rows.length === 0) {
      return res.status(400).json({ err: 'User not found' });
    }

    const user = result.rows[0];

    if (user.password === password) {
      res.json({ message: 'Login successful', name: user.name });
    } else {
      res.status(400).json({ err: 'Invalid password' });
    }
  });
});

// HOME
app.get('/home', (req, res) => {
  res.send('This is Home Page');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
