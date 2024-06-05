'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EmployeeFamilies', [
      {
        employee_id: 2,
        name: 'Marni',
        identifier: '32100594109960002',
        job: 'Ibu Rumah Tangga',
        place_of_birth: 'Denpasar',
        date_of_birth: '1995-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Istri',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
      {
        employee_id: 2,
        name: 'Clara',
        identifier: '32100594109020004',
        job: 'Pelajar',
        place_of_birth: 'Bangkalan',
        date_of_birth: '2008-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Anak',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
      {
        employee_id: 2,
        name: 'Stephanie',
        identifier: '32100594109020005',
        job: 'Pelajar',
        place_of_birth: 'Bangkalan',
        date_of_birth: '2008-10-17',
        religion: 'Islam',
        is_life: true,
        is_divorced: false,
        relation_status: 'Anak',
        created_by: 'admin',
        updated_by: 'admin',
        created_at: '2022-12-12',
        updated_at: '2022-12-12'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmployeeFamilies', null, {});
  }
};
