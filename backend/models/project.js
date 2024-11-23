const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  liveUrl: String,
});

module.exports = mongoose.model("Project", ProjectSchema);