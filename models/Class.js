// server/models/Class.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: String, required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }] // Reference to Student model
});

module.exports = mongoose.model('Class', classSchema);
