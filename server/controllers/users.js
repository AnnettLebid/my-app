import mongoose from 'mongoose';
import User from '../models/userSchema.js';

export const getUsers = async (req, res) => {
  
  try {
    const platformUsers = await User.find();
       
    res.status(200).json(platformUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createUser = async (req, res) => {  
  const user = req.body;

  const newUser = new User(user);

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteUser = async (req, res) => { 
  const { id } = req.params; 
  
  if (!mongoose.Types.ObjectId.isValid(id)) { return res.status(404).send('No such user') };
  
  await User.findByIdAndRemove(id);

  res.json({ message: 'User deleted successfully!'});
}

export const updateUser = async (req, res) => {
  const id = req.params;
  const _id = id; 

  const user = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(_id)) { return res.status(404).send('No such user') };
  
  const updatedUser = await User.findByIdAndUpdate(_id, {...user, _id});

  res.json(updatedUser);

}

