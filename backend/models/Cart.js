import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  sessionId: String,
  items: [{
    productId: String,
    quantity: Number,
    price: Number,
    title: String,
    image: String
  }],
  subtotal: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Cart', cartSchema);
