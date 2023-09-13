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

//virtuals
tweetSchema.virtual("ContentWithEmail").get(function process() {
    return `${this.content} Created by : ${this.userEmail}`;
});

//hooks
tweetSchema.pre("save", function (next) {
    console.log("inside hook");
    this.content = this.content + "......";
    next();
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
