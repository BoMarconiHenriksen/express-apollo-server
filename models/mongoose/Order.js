import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  invoiceNumber: {
    type: Number,
    index: true
  },
  orderNumber: {
    type: Number
  },
  totalPrice: {type: Number,
    required: true
  },
  vat: {
    type: Number
  },
},
{
  timestamps: true
});

export default mongoose.model("Order", OrderSchema);
