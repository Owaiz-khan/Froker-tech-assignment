const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { phoneNumber, email, name, dob, monthlySalary, password } = req.body;

  // Age validation
  const currentDate = new Date();
  const userAge = currentDate.getFullYear() - new Date(dob).getFullYear();

  if (userAge < 20) {
    return res
      .status(400)
      .json({ message: "User must be above 20 years of age." });
  }

  // Salary validation
  if (monthlySalary < 25000) {
    return res
      .status(400)
      .json({ message: "Monthly salary should be 25k or more." });
  }

  // Password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    phoneNumber,
    email,
    name,
    dob,
    monthlySalary,
    password: hashedPassword,
    status: "Approved",
    purchasePower: 0.3 * monthlySalary, 
  });
//User registration
  try {
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});
//User information and token initialization
router.get("/user", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      purchasePower: user.purchasePower,
      phoneNumber: user.phoneNumber,
      email: user.email,
      dateOfRegistration: user.dateOfRegistration,
      dob: user.dob,
      monthlySalary: user.monthlySalary,
    });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

router.post("/borrow", async (req, res) => {
  const { amount } = req.body;
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (amount > user.purchasePower) {
      return res.status(400).json({ message: "Insufficient purchase power" });
    }

    user.purchasePower -= amount;

    // Calculate repayment details
    const interestRate = 0.08;
    const tenureMonths = 12;
    const monthlyRepayment = (amount * (1 + interestRate)) / tenureMonths;

    await user.save();

    res.status(200).json({
      purchasePower: user.purchasePower,
      monthlyRepayment,
    });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;
