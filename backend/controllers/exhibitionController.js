import Exhibition from '../models/Exhibition.js';

export const getExhibitions = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const exhibitions = await Exhibition.find(query).sort({ startDate: -1 });
    res.json({ success: true, exhibitions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getExhibitionById = async (req, res) => {
  try {
    const exhibition = await Exhibition.findById(req.params.id);
    if (!exhibition) return res.status(404).json({ success: false, message: 'Exhibition not found' });
    res.json({ success: true, exhibition });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createExhibition = async (req, res) => {
  try {
    const exhibition = new Exhibition(req.body);
    await exhibition.save();
    res.status(201).json({ success: true, exhibition });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateExhibition = async (req, res) => {
  try {
    const exhibition = await Exhibition.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, exhibition });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteExhibition = async (req, res) => {
  try {
    await Exhibition.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Exhibition deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
