const { User } = require('../models/index');

    
class UserRepository {

    async createUser(userData) {
        try {
            const result = await User.create(userData);
            return result;

        } catch (error) {
            console.log('something went wrong in repository layer');
            throw(error);
        }
    }

    async deleteUser(userId) {
        try {
            const response = await User.destroy({
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
            const result = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return result;           
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw(error);
        }
    }

    async getByEmail(userEmail) {
        try {
            const response = await User.findOne({
                where: {
                    email: userEmail
                }
            });

            return response;
        } catch (error) {
            console.log('somethign went wrong in repository layer');
            throw(error);
        }
    }

}

module.exports = UserRepository;

