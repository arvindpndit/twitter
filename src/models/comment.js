import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
        },
        commentable: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refPath: "onModel",
        },
        onModel: {
            type: String,
            required: true,
            enum: ["Tweet", "Comment"],
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
