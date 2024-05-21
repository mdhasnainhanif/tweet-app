const Tweet = require("../models/Tweet.js");

exports.createTweet = async (req, res, next) => {
    const { content } = req.body;
    try {
        if (!content) {
            return res.status(400).json({ message: "Content is required!" });
        }
        const tweet = new Tweet({ content });
        await tweet.save();
        return res.status(201).json({ message: "Tweet created successfully", data: tweet });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.deleteTweet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tweet = await Tweet.findByIdAndDelete(id);
        if (!tweet) {
            return res.status(404).json({ message: "Tweet not found" });
        }
        return res.status(200).json({ message: "Tweet deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getAllTweets = async (req, res, next) => {
    try {
        const tweets = await Tweet.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order

        if (tweets.length < 1) {
            return res.status(403).json({ message: "Tweets not found" });
        }
        return res.status(200).json({ data: tweets });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
