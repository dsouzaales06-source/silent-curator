import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  id: String,
  title: String,
  subtitle: String,
  author: String,
  category: String,
  content: String,
  image: String,
  publishedDate: Date,
  featured: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Article', articleSchema);
