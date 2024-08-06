const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Define routes for classes
router.post('/', classController.createClass); // Create a new class
router.get('/', classController.getClasses); // Get all classes
router.get('/:id', classController.getClassById); // Get class by ID (basic details)
router.get('/data/:classId', classController.getClassData); // Get class data with populated students

module.exports = router;
