const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const employeeRoutes = require('./routes/employee');
app.use('/employees', employeeRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await sequelize.sync();
});
