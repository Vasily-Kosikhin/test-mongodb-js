import mongoose from 'mongoose';
import Schema from 'mongoose';

const OverallSchema = new mongoose.Schema({
  country: { type: String, required: true },
  overallStudents: { type: Number, required: true }
});

export default mongoose.model('OverallStat', OverallSchema);
