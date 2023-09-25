import UserRepository from "../repository/user-repository.js";

class UserService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async signup(data) {
        const user = await this.userRepo.create(data);
        return user;
    }

    async getUserbyEmail(email) {
        try {
            const user = await this.userRepo.findBy({ email: email });
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;
