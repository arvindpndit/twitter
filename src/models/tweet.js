import mongoose from "mongoose";

//schema is basically the structure of the json document
const tweetSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            max: [250, "Tweet cannot be more than 250 characters"],
        },
    },
    { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
