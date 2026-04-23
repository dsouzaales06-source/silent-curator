import mongoose from 'mongoose';

const exhibitionSchema = new mongoose.Schema({
  id: String,
  title: String,
  subtitle: String,
  description: String,
  startDate: Date,
  endDate: Date,
  location: String,
  image: String,
  featured: Boolean,
  status: { type: String, enum: ['current', 'upcoming', 'past'], default: 'upcoming' },
  curator: String,
  artists: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Exhibition', exhibitionSchema);
