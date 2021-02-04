import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  description: String,
  state:   Boolean,
  date: { type: Date, default: Date.now },
});

mongoose.model('todo',todoSchema)
module.exports(todoSchema)