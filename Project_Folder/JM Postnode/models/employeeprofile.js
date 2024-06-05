module.exports = (sequelize, DataTypes) => {
  const EmployeeProfile = sequelize.define('EmployeeProfile', {
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
    place_of_birth: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.ENUM('Laki-Laki', 'Perempuan'),
    is_married: DataTypes.BOOLEAN,
    prof_pict: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  EmployeeProfile.associate = function(models) {
    EmployeeProfile.belongsTo(models.Employee, { foreignKey: 'employee_id' });
  };
  return EmployeeProfile;
};
