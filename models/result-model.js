import mongoose from 'mongoose';
import Schema from 'mongoose';

const ResultSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  allDiffs: [],
  count: { type: Number, required: true },
  longitude: [],
  latitude: []
});

export default mongoose.model('resultStats', ResultSchema);
