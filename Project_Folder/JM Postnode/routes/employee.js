const express = require('express');
const { check, validationResult } = require('express-validator');
const { Employee, EmployeeProfile, EmployeeFamily, Education } = require('../models');
const router = express.Router();

// Get All Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [EmployeeProfile, EmployeeFamily, Education]
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get One Employee
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {
      include: [EmployeeProfile, EmployeeFamily, Education]
    });
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Employee and its profile, family, & education
router.post('/', [
  // Validation middleware
  check('nik').isLength({ min: 1 }).withMessage('NIK is required'),
  check('name').isLength({ min: 1 }).withMessage('Name is required'),
  // Add more validations as needed
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { employee, profile, family, education } = req.body;

  try {
    const newEmployee = await Employee.create(employee);
    if (profile) await EmployeeProfile.create({ ...profile, employee_id: newEmployee.id });
    if (family) await EmployeeFamily.bulkCreate(family.map(f => ({ ...f, employee_id: newEmployee.id })));
    if (education) await Education.bulkCreate(education.map(e => ({ ...e, employee_id: newEmployee.id })));

    const result = await Employee.findByPk(newEmployee.id, {
      include: [EmployeeProfile, EmployeeFamily, Education]
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Employee and its profile, family, & education
router.put('/:id', async (req, res) => {
  const { employee, profile, family, education } = req.body;

  try {
    const existingEmployee = await Employee.findByPk(req.params.id);
    if (!existingEmployee) return res.status(404).json({ error: 'Employee not found' });

    await existingEmployee.update(employee);
    if (profile) {
      const existingProfile = await EmployeeProfile.findOne({ where: { employee_id: req.params.id } });
      if (existingProfile) {
        await existingProfile.update(profile);
      } else {
        await EmployeeProfile.create({ ...profile, employee_id: req.params.id });
      }
    }

    if (family) {
      await EmployeeFamily.destroy({ where: { employee_id: req.params.id } });
      await EmployeeFamily.bulkCreate(family.map(f => ({ ...f, employee_id: req.params.id })));
    }

    if (education) {
      await Education.destroy({ where: { employee_id: req.params.id } });
      await Education.bulkCreate(education.map(e => ({ ...e, employee_id: req.params.id })));
    }

    const result = await Employee.findByPk(req.params.id, {
      include: [EmployeeProfile, EmployeeFamily, Education]
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Employee
router.delete('/:id', async (req, res) => {
  try {
    await EmployeeProfile.destroy({ where: { employee_id: req.params.id } });
    await EmployeeFamily.destroy({ where: { employee_id: req.params.id } });
    await Education.destroy({ where: { employee_id: req.params.id } });
    await Employee.destroy({ where: { id: req.params.id } });

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
