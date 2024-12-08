import mongoose from 'mongoose';

const cricketerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Cricketer name is required'],
    trim: true,
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  matches: {
    type: Number,
    required: [true, 'Matches played is required'],
    min: [0, 'Matches cannot be negative'],
  },
  runs: {
    type: Number,
    default: 0,
    min: [0, 'Runs cannot be negative'],
  },
  wickets: {
    type: Number,
    default: 0,
    min: [0, 'Wickets cannot be negative'],
  },
});

const Cricketer = mongoose.model('Cricketer', cricketerSchema);

export default Cricketer;
