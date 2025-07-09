const { user } = require('../models/index');


class UserRepository {

    async createUser(userData) {
        try {
            const result = await user.create(userData);
            return result;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw(error);
        }
    }

    async deleteUser(userId) {
        try {
            const response = await user.destroy({
                where: {
                    id: userId
                }
            });

            return response;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw(error);
        }
    }

    async getById(userId) {
        try {
            const response = await user.findByPk(userId, {
                attributes: ['id', 'email']
            });
            return response;
        } catch (error) {
            console.log('something Went wrong in respository layer');
            throw(error);
        }
    }


    async getByEmail(userEmail) {
        try {
            const response = await user.findOne({
                where: {
                    email: userEmail
                }
            });

            return response;
        } catch (error) {
            console.log('something Went wrong in respository layer');
            throw(error);
        }
    }
}

module.exports = UserRepository;

