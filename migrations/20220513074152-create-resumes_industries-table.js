module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('resumes_industries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      resume_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'resumes',
          key: 'id',
        },
      },
      industry_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'industries',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('resumes_industries');
  },
};
