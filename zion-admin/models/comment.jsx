import mongoose, { Schema } from "mongoose";


const commentSchema = new Schema({
  name: String,
  email: String,
  content: String
}, {
  timestamps: true
})

const Commente = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export  default Commente;