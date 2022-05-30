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
        profile_image: 'johndoe',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'js@gmail.com',
        github_account: 'github.com/janesmith',
        linkedin: 'linkedin.com/in/janesmith',
        mobile_number: 98188212,
        profile_image: 'janesmith',
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
