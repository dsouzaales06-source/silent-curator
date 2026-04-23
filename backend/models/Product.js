import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  artist: String,
  category: String,
  material: String,
  price: Number,
  image: String,
  description: String,
  dimensions: String,
  weight: String,
  origin: String,
  available: Boolean,
  stock: Number,
  featured: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Product', productSchema);
