import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        });
        return res.status(201).json({
            success: true,
            message: "Successfully created a new user",
            data: response,
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: err,
        });
    }
};

export const login = async (req, res) => {
    try {
        const user = await userService.getUserbyEmail(req.body.email);

        console.log("this is user object", user);

        if (!user) {
            return res.status(401).json({
                message: "NO USER FOUND ",
                success: false,
            });
        }

        if (!user.comparePassword(req.body.pass)) {
            return res.status(401).json({
                message: "INCORRECT PASSWORD",
                success: false,
            });
        }
        console.log("checkpoint");
        const token = user.genJwt();
        console.log(token);
        return res.status(200).json({
            message: "SUCCESSFULLY LOGGED IN",
            data: token,
            err: {},
            success: false,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error,
        });
    }
};
