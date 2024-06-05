const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://your_username:your_password@localhost:5432/data_kepegawaian');

// Import models
const Employee = require('./models/employee')(sequelize, DataTypes);
const EmployeeProfile = require('./models/employeeprofile')(sequelize, DataTypes);
const EmployeeFamily = require('./models/employeefamily')(sequelize, DataTypes);
const Education = require('./models/education')(sequelize, DataTypes);

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Unable to sync database:', err);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
