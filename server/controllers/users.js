import User from '../models/userSchema.js';

export const getUsers = async (req, res) => {
  try {
    const platformUsers = await User.find();
   
    res.status(200).json(platformUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createUser = (req, res) => {
  const body = req.body;

}