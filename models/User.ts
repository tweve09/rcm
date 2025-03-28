import mongoose, { Schema, Document, models, model } from "mongoose";

// Define User Interface
interface IUser extends Document {
  email: string;
  password: string;
  name?: string;
}

// Define User Schema
const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
});

// Prevent Model Overwriting in Hot Reload
const User = models.User || model<IUser>("User", UserSchema);

export default User;
