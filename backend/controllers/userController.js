import User from "../models/User.js";

// GET users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// POST user
export const createUser = async (req, res, next) => {
  try {
    const { name, email, phone, company } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email are required"
      });
    }

    const user = await User.create({
      name,
      email,
      phone,
      company
    });

    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }
    next(error);
  }
};