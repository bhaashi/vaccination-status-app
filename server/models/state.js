import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const stateSchema = new Schema({
    _id: {
      type: Number
    },
    name: {
      type: String
    },
    cities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'City'
      }
    ],
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country'
    }
  });

const State = mongoose.model('State',stateSchema);
export default State;
  