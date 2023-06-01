const mongoose = require('mongoose');
const SubjectSchema = mongoose.Schema(
   {
      full_name: String,
      slot: Number,
      image: String
   }
);
const SubjectModel = mongoose.model("SUBJECT", SubjectSchema, "subject");
module.exports = SubjectModel;