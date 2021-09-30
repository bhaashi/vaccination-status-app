import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const citySchema = mongoose.Schema({
    _id: {
        type: Number
      },
      name: {
        type: String
      },
    population:Number,
    vaccinated:Number,
    dosesAvailable:Number,
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State'
      }
});

const City = mongoose.model('City',citySchema);
export default City;