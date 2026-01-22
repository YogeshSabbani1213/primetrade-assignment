import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || name.length < 5) {
    return res.status(400).json({
      message: "Name must be at least 5 characters long",
    });
  }


  if (!password || password.length < 8) {
    return res.status(400).json({
      message: "Password must be at least 8 characters long",
    });
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "Email already registered",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await UserModel.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({ message: "Registered successfully" });
};



//yogesh:
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzI0OTBlMWY3ODk2ZTRiNzAyNTE0OSIsImlhdCI6MTc2OTA5NzY3OX0.YeOZDB6Cefl-JDdLjgB7yPmUjVbvP6tXZWnTSdyKrZA

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User doesn't exist. Please register.",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).json({
      message: "Incorrect password.",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token, user });
};

