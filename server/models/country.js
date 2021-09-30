import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    _id: {
      type: Number
    },
    name: {
      type: String
    },
    states: [
      {
        type: Schema.Types.ObjectId,
        ref: 'State'
      }
    ]
  });

const Country = mongoose.model('Country',countrySchema);
export default Country;