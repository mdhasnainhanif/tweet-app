const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            unique: false
        },
        lastName: {
            type: String,
            required: true,
            unique: false
        },
        description: {
            type: String,
            required: true,
            max: 280,
        },
        profilePicture: {
            type: String,
            default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser-avatar.svg&psig=AOvVaw2QWCHiQHEUcOolI90r3Lgv&ust=1715522723064000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNj53aXihYYDFQAAAAAdAAAAABAE'
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweet", TweetSchema);
