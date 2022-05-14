module.exports = {
  up: async (queryInterface, Sequelize) => {
    const industryList = [
      {
        industry_name: 'Technology',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        industry_name: 'Telecommunications',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        industry_name: 'Health Care',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        industry_name: 'Financials',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        industry_name: 'Consumer Discretionary',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('industries', industryList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('industries', null, {});
  },
};
