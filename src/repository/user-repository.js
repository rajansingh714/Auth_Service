const { User } = require('../models/index');


class UserRespository {

    async create(data) {
        try {
            const response = await User.create(data);
            return response;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw(error);
        }
    }

    async destroy(userId) {
        try {
            const result = await User.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
             console.log('something went wrong in repository layer');
            throw(error);
        }
    }

    async getById(userId) {
        try {
            const result = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return result;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw(error);
        }
    }
}

module.exports = UserRespository;


