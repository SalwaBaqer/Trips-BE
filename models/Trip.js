const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Trip", TripSchema);
