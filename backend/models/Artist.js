import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  id: String,
  name: String,
  title: String,
  bio: String,
  image: String,
  location: String,
  specialty: String,
  portfolio: [String],
  philosophy: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Artist', artistSchema);
