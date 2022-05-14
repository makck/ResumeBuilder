const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const industryList = [];

    for (let i = 0; i < 30; i += 1) {
      industryList.push({
        industry_name: faker.Industry.industry(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert('industries', industryList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('industries', null, {});
  },
};
