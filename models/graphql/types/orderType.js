export default`
  """
  The order contains all the information about a order.
  """
  type Order {
    id: ID!
    invoiceNumber: Int
    orderNumber: Int
    totalPrice: Float!
    vat: Float
    createdAt: Date
    updatedAt: Date
  }

  scalar Date

  type Query {
    """
    Get an order by id.
    """
    order( id: ID! ): Order
    """
    Get all the orders.
    """
    orders: [ Order ]
  }

  type Mutation {
    """
    This mutation add an order to the database.
    """
    createOrder( input: OrderInput! ): Order
  }

    """
    The properties you need to create an order.
    """
  input OrderInput {
    invoiceNumber: Int
    orderNumber: Int
    totalPrice: Float!
    vat: Float
  }
`;
