'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Educations', [
      {
        employee_id: 1,
        name: 'SMKN 7 Jakarta',
        level: 'Sma',
        description: 'Sekolah Menangah Atas',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
      {
        employee_id: 2,
        name: 'Universitas Negeri Jakarta',
        level: 'Strata1',
        description: 'Sarjana',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Educations', null, {});
  }
};
