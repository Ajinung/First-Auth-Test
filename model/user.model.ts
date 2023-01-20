import mongoose, { Document, model, Schema } from "mongoose";

interface userData {
  fullName: string;
  email: string;
  password: string;
  stack: string;
  isAdmin: boolean;
}

interface dataSchema extends userData, Document {}

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "please enter your full name"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      minlength: 6,
    },
    stack: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = model<dataSchema>("userSchema", userSchema);

export default userModel;
