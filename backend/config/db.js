const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Connect with the URI only
    console.log("✅ MongoDB connection successful!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
