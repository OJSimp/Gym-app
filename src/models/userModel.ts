import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true },
  firstName: {type: String},
  lastName: {type: String},
  gender: {type: String},
  dateOfBirth: {type: Date},
  measureUnits: {type: String},
  height: {type: Number},
  weight: {type: Number},
  fitnessGoals: {type: String},
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
