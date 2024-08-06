const Attendance = require('../models/Attendance');
const Class = require('../models/Class'); // Adjust the path to your model

// Mark attendance for a class
exports.markAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get attendance records for a specific class and date
exports.getAttendances = async (req, res) => {
  try {
    const { classId, date } = req.params;

    // Fetch attendance records based on classId and date
    const attendances = await Attendance.find({ classId, date }).exec();

    if (!attendances.length) {
      return res.status(404).json({ error: 'No attendance records found' });
    }

    res.status(200).json(attendances);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get class data with populated students (if necessary)
exports.getClassData = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.classId)
      .populate('students') // Ensure the 'students' field is populated
      .exec();

    if (!classData) {
      return res.status(404).json({ error: 'Class not found' });
    }

    res.status(200).json(classData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
