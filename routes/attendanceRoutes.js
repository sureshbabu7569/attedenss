const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Route for fetching class data including students
router.get('/classes/:classId', attendanceController.getAttendances);

// Route for marking attendance
//router.post('/api/attendance', attendanceController.markAttendance);

router.post('/', attendanceController.markAttendance);

// Get attendance records for a class and date
router.get('/:classId/:date', attendanceController.getAttendances);

module.exports = router;


