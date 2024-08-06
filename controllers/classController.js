const Class = require('../models/Class');

// Create a new class
exports.createClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all classes
exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get class by ID (basic details)
exports.getClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id);
    if (!classData) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.status(200).json(classData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get class data with populated students
exports.getClassData = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.classId)
      .populate('students') // Populate students field
      .exec();
    if (!classData) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.status(200).json(classData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
