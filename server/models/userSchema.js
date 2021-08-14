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
  },  
  email: String,
  registered: {
    date: Date,
    age: Number
  },
  picture: {
    large: String,
    medium: String,
    thumbnail: String
  },
}});

const User = mongoose.model('User', userSchema);

export default User;