const mongoose = require("mongoose");

//schema is basically the structure of the json document
const tweetSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
        },
        comments: [
            {
                content: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
