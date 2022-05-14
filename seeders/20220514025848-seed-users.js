module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'jd@gmail.com',
        github_account: 'github.com/johndoe',
        linkedin: 'linkedin.com/in/johndoe',
        mobile_number: 96356678,
        profile_image: 'test-profile',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
