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