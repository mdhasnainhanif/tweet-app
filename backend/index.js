const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tweetRoutes = require("./routes/tweets.js");
const pug = require('pug');
const axios = require('axios');

const app = express();

const MONGO = 'mongodb+srv://hassanzindani030:ojvYwKeiRPd3pShX@cluster0.1sbjnwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MONGO).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true 
}));

app.use("/api/tweets", tweetRoutes);

app.set('view engine', 'pug');
app.set('views', './views'); 
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8000/api/tweets/alltweets');
        const tweetData = response.data.data;
        res.render('index', { tweets: tweetData });
    } catch (error) {
        console.error('Error fetching tweet data:', error);
        res.status(500).send('Error fetching tweet data');
    }
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
