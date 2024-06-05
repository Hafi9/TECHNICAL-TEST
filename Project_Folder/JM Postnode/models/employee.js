module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nik: DataTypes.STRING,
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  Employee.associate = function(models) {
    Employee.hasOne(models.EmployeeProfile, { foreignKey: 'employee_id' });
    Employee.hasMany(models.EmployeeFamily, { foreignKey: 'employee_id' });
    Employee.hasMany(models.Education, { foreignKey: 'employee_id' });
  };
  return Employee;
};
