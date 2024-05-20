const express = require("express");
const { verifyToken } = require("../verifyToken");
const { createTweet, deleteTweet, getUserTweets, updateTweet, getAllTweets } = require("../controllers/tweet");

const router = express.Router();

router.post("/", verifyToken, createTweet);
router.delete("/:id", verifyToken, deleteTweet);
router.put("/user/:id", verifyToken, updateTweet); 
router.get("/user/all/:id", verifyToken, getUserTweets); 
router.get("/alltweets", getAllTweets);

module.exports = router;
