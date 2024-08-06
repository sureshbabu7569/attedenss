// server/models/Attendance.js

const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  records: [{
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    status: {
      type: String,
      enum: ['Present', 'Absent'],
      required: true,
    },
  }],
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
