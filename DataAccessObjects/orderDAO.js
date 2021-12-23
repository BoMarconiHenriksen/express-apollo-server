import Order from '../models/mongoose/Order.js';

async function createOrder(newOrder) {
  return await Order.create(newOrder);
};

async function getAllOrders() {
  return await Order.find({})
};

async function findOrderByName(name) {
  return await Order.findOne({
    name: name
  }).exec();
};

async function findOrderById(id) {
    console.log(id)
  return await Order.findById({
    _id: id
  });
};

async function deleteOrder(id) {
  return await Order.findByIdAndDelete({ _id:id });
};


async function updateOrder(id, input) {
  return await Order.findByIdAndUpdate({ _id:id }, input , { new: true }).exec();
};

export default {
  createOrder: createOrder,
  getAllOrders: getAllOrders,
  findOrderByName: findOrderByName,
  findOrderById: findOrderById,
  deleteOrder: deleteOrder,
  updateOrder: updateOrder
};
