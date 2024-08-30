// app.js

const express = require('express');
const app = express();
const port = 3000;

// Define a route for the welcome page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Node.js App!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
