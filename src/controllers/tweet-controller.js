import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.createTweet(req.body);
        return res.status(201).json({
            success: true,
            message: "Succcessfully created a tweet",
            data: response,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to create tweet :(",
            data: {},
            err: { error },
        });
    }
};
