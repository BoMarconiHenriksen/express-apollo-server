import Order from '../../mongoose/Order.js';
import orderDAO from '../../../DataAccessObjects/orderDAO.js'

export default {
  Query: {
    order: (_, { id }) => {
      return orderDAO.findOrderById( id );
    },
    orders: () => {
      return orderDAO.getAllOrders();
    },
  },
  Mutation: {
    createOrder: (_, { input }) => {
      const newOrder = new Order({
        invoiceNumber: input.invoiceNumber,
        orderNumber: input.orderNumber,
        totalPrice: input.totalPrice,
        vat: input.vat
      });

      return orderDAO.createOrder( newOrder );
    }
  }
};
