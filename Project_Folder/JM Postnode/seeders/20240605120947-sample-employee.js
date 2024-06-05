'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [
      {
        nik: '11012',
        name: 'Budi',
        is_active: true,
        start_date: '2022-12-12',
        end_date: '2029-12-12',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
      {
        nik: '11013',
        name: 'Jarot',
        is_active: true,
        start_date: '2021-09-01',
        end_date: '2028-09-01',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
