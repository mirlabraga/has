import * as mongoose from 'mongoose';

export const PatientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  levelOfPain: {
    type: Number,
    required: true,
  }
});
