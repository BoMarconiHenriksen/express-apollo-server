import User from '../models/mongoose/User.js';

async function createUser(newUser) {
  try {
    return await User.create(newUser);
  } catch (exception) {
    console.log(exception.message);
    console.log(exception.errors.age);
  }
};

async function getAllUsers() {
  return await User.find({})
};

async function findUserById(id) {
  return User.findById({
    _id: id
  });
};

async function deleteUser(id) {
  return await User.findByIdAndDelete({ _id:id });
};


async function updateUser(id, input) {
  // return await User.findByIdAndUpdate({ _id:id }, input , { new: true }).exec();
  await User.findById(id).save(input); // Check this!!!
};

export default {
  createUser: createUser,
  getAllUsers: getAllUsers,
  findUserById: findUserById,
  deleteUser: deleteUser,
  updateUser: updateUser
};
