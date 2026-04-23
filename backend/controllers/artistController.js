import Artist from '../models/Artist.js';

export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find().sort({ createdAt: -1 });
    res.json({ success: true, artists });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ success: false, message: 'Artist not found' });
    res.json({ success: true, artist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(201).json({ success: true, artist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, artist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    await Artist.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Artist deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
