const express = require("express");
const { createTweet, deleteTweet, getAllTweets } = require("../controllers/tweet");

const router = express.Router();

router.post("/", createTweet);
router.delete("/:id", deleteTweet);
router.get("/alltweets", getAllTweets);

module.exports = router;
