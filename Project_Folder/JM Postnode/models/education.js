module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define('Education', {
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
    level: DataTypes.ENUM('Tk', 'Sd', 'Smp', 'Sma', 'Strata1', 'Strata2', 'Doktor', 'Profesor'),
    description: DataTypes.STRING,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  Education.associate = function(models) {
    Education.belongsTo(models.Employee, { foreignKey: 'employee_id' });
  };
  return Education;
};
