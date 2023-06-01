const mongoose = require('mongoose');
const LecturerSchema = mongoose.Schema(
   {
      full_name: String,
      birth_year: Number,
      email: String,
      gender: String,
      image: String
   }
);
const LecturerModel = mongoose.model("LECTURER", LecturerSchema, "lecturer");
module.exports = LecturerModel;