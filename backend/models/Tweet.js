const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            default: "Hassan Zandani"
        },
        content: {
            type: String,
            required: true,
            max: 280,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweet", TweetSchema);
