'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EmployeeProfiles', [
      {
        employee_id: 2,
        place_of_birth: 'Jakarta',
        date_of_birth: '1997-05-02',
        gender: 'Laki-Laki',
        is_married: true,
        prof_pict: '',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
      {
        employee_id: 3,
        place_of_birth: 'Sukabumi',
        date_of_birth: '1996-05-02',
        gender: 'Laki-Laki',
        is_married: false,
        prof_pict: '',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmployeeProfiles', null, {});
  }
};
