import User from '../../mongoose/User.js';
import userDAO from '../../../DataAccessObjects/userDAO.js';

export default {
  Query: {
    user: (_, { id }) => {
      return userDAO.findUserById( id );
    },
    users: () => {
      return userDAO.getAllUsers();
    },
  },
  Mutation: {
    createUser: (_, { input }) => {
      const newUser = new User({
        firstName: input.firstName,
        lastName: input.lastName,
        addressOne: input.addressOne,
        postNumber: input.postNumber,
        city: input.city,
        cellPhone: input.cellPhone,
        email: input.email,
      });

      return userDAO.createUser( newUser );
    }
  }
};
