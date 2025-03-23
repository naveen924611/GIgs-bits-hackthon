const User = require("../models/User");

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password, skills } = req.body;

  try {
    const user = await User.create({ name, email, password, skills });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User registration failed" });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};
