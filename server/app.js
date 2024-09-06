const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define the OAuth callback route
app.get('/callback', (req, res) => {
    // Capture the authorization code from the query params
    const authorizationCode = req.query.code;
    
    if (authorizationCode) {
        // Handle the received authorization code here (e.g., exchange for access token)
        console.log('Authorization Code:', authorizationCode);
        res.send('Authorization Code received: ' + authorizationCode);
    } else {
        res.status(400).send('Authorization Code not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
