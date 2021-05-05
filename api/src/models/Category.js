const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true},
  description: { type: String, required: false },
  // subcagories: [{name: { type: String}}]
});

module.exports = mongoose.model("Category", categorySchema);
