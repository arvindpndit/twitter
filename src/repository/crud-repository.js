class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const create = await this.model.create(data);
            return create;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(id) {
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, {
                new: true,
            });
            return response;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
}

export default CrudRepository;
