import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const response = await commentService.create(
            req.query.modelId,
            req.query.modelType,
            req.body.userId,
            req.body.content
        );
        console.log(response);
        return res.status(201).json({
            success: true,
            message: "Succcessfully created a comment",
            data: response,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to create comment :(",
            data: {},
            err: { error },
        });
    }
};
