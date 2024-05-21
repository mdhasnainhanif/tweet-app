const Tweet = require("../models/Tweet.js");

exports.createTweet = async (req, res, next) => {

    const { content } = req.body
    try {
        if (!content) {
            res.status(400).json({ message: "Content is required!" })
        }
        const tweet = new Tweet({ content })
        await tweet.save()
        res.status(201).json({ message: "Tweet created successfully", data: tweet })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


exports.deleteTweet = async (req, res, next) => {
    try {
        const { id } = req.params
        const tweet = await Tweet.findByIdAndDelete(id)
        if (!tweet) {
            res.status(404).json({ message: "Tweet not found" })
        }
        res.status(200).json({ mesage: "Tweet Deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


exports.getAllTweets = async (req, res, next) => {

    try {
        const tweets = await Tweet.find()

        if (tweets.length == 0 || !tweets) {
            res.status(403).json({ message: "Tweets not found" })
        }
        res.status(200).json({ data: tweets })

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}