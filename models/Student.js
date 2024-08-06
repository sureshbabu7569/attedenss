// server/models/Student.js

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  }],
});

module.exports = mongoose.model('Student', StudentSchema);
