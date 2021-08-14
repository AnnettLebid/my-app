import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    title: String,
    first: String,
    last: String
  },
  location: {
    street: {
      number: Number,
      name: String
    },
    city: String,
    state: String,
    country: String,
    postcode: Number,
    coordinates: {
      latitude: String,
      longitude: String 
    },
    timezone: {
      offset: String,
      description: String
    }
  },
  email: String,
  required: true,
  unique: true,
  lowercase: true,
  validate: (value) => {
    return validator.isEmail(value)
  },
  registered: {
    date: Date, default: Date.now(),
    age: Number
  },
  picture: {
    large: { data: Buffer, contentType: String },
    medium: { data: Buffer, contentType: String },
    thumbnail: { data: Buffer, contentType: String }
  },
});

const User = mongoose.model('User', userSchema);

export default User;