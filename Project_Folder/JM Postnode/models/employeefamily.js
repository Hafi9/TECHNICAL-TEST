module.exports = (sequelize, DataTypes) => {
  const EmployeeFamily = sequelize.define('EmployeeFamily', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    identifier: DataTypes.STRING,
    job: DataTypes.STRING,
    place_of_birth: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    religion: DataTypes.ENUM('Islam', 'Katolik', 'Buda', 'Protestan', 'Konghucu'),
    is_life: DataTypes.BOOLEAN,
    is_divorced: DataTypes.BOOLEAN,
    relation_status: DataTypes.ENUM('Suami', 'Istri', 'Anak', 'Anak_Sambung'),
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  EmployeeFamily.associate = function(models) {
    EmployeeFamily.belongsTo(models.Employee, { foreignKey: 'employee_id' });
  };
  return EmployeeFamily;
};
