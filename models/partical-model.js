import mongoose from 'mongoose';
import Schema from 'mongoose';

const ParticalSchema = new mongoose.Schema({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: Object, required: true },
  students: { type: Array, required: true },
  difference: { type: Array, required: true, default: [] }
});

export default mongoose.model('ParticalStat', ParticalSchema);
