import * as mongoose from 'mongoose';

export const CranesSchema = new mongoose.Schema({
  seqNo: {
    type: Number,
    required: true
  },
  name: String,
  url: String,
  iconUrl: String,
  category: String,
  loadCapacity: Number,
  telescopicBoom: Number,
  maxHeight: Number,
  maxRadius: Number,
  axles: Number,
  description: String,
});

