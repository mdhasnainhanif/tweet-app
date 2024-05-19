const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auths.js"); // Adjust the path as necessary
const tweetRoutes = require("./routes/tweets.js");
const pug = require('pug');
const axios = require('axios');
const { handleError } = require("./error.js"); // Import handleError for use in middleware

const app = express();
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err);
    });

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // Allow this origin to access the server
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true // Allow cookies to be sent
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

// View engine setup
app.set('view engine', 'pug');

// Example route
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8000/api/tweets/user/all/663f856e8275d04413a51676');
        const tweetData = response.data;
        res.render('index', { tweets: tweetData });
    } catch (error) {
        console.error('Error fetching tweet data:', error);
        res.status(500).send('Error fetching tweet data');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'An unexpected error occurred';
    res.status(status).json({ message });
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
