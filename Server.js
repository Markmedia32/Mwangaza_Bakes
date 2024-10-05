// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Dummy array of allowed email addresses
const allowedEmails = ['markelmutwiri144@gmail.com', 'Makenarose827@gmail.com', 'owner3@example.com'];

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const { email } = req.body;

    if (allowedEmails.includes(email)) {
        res.send('Login successful');
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
