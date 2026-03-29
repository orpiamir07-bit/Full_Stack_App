import mongoose from "mongoose";

let connection = {};

export const connectToDb = async () => {
  if (connection.isconnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isconnected = db.connections[0].readyState;
    console.log("✅ Connected to MongoDB:", db.connection.name);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};