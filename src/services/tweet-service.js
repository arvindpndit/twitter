const { TweetRepository } = require("../repository/index");

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async createTweet(data) {
        try {
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9_]/g); //regex for extracting hashtags
            tags = tags.map((tag) => tag.substring(1));
            console.log(tags);
            const tweet = await this.tweetRepository.create(data);
            return tweet;
        } catch (error) {
            console.log("Something went wrong in service layer");
        }
    }
}

module.exports = TweetService;
