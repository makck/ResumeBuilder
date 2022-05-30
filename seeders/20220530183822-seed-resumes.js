module.exports = {
  up: async (queryInterface, Sequelize) => {
    const resumes = [
      {
        user_id: 1,
        resume_details: JSON.stringify({
          education: [
            { qualification: 'Msc Computer Science', institution: 'National University of Singapore', year_duration: '2012-2014' },
            { qualification: 'Bsc Hons Comupter Science', institution: 'National University of Singapore', year_duration: '2008 - 2012' },
          ],
          summary: 'I am a software engineer that is constantly on the lookout for new ways to improve things. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.',
          experience: [
            {
              job_title: 'Senior Software Engineer, Core Services', location: 'Financial Services, Sau', job_year_duration: '2018 - Present', highlights: 'Developed web app for managing employee. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.',
            },
            {
              job_title: 'Senior Software Engineer / Scrum Master (contract)', location: 'Avventa World Wide, Singapore', job_year_duration: '2015 - 2018', highlights: 'Built a url system in javascript to replace Perl 5. legacy processing system. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.',
            },
            {
              job_title: 'Software Engineer / Team Lead', location: 'People Voat (project, Made During College)', job_year_duration: '2014 - 2015', highlights: 'rovided front support for the credit processing of requests (app using bases, and d3.) lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.',
            },
          ],
        }),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        resume_details: JSON.stringify({
          education: [
            { qualification: 'Msc Computer Science', institution: 'National University of Singapore', year_duration: '2012-2014' },
            { qualification: 'Bsc Hons Comupter Science', institution: 'National University of Singapore', year_duration: '2008 - 2012' },
          ],
          summary: 'I am a software engineer that is constantly on the lookout for new ways to improve things. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.',
          experience: [
            {
              job_title: 'Senior Software Engineer / Team Lead', location: 'Radoil, Singapore', job_year_duration: '2018 - Present', highlights: 'Managed an offshore development team that makes best content, publishing java, test cases and test cases, test cases, and architects create more and stable code. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.',
            },
            {
              job_title: 'Senior Software Engineer / Scrum Master (contract)', location: 'Studysoup (usa)', job_year_duration: '2015 - 2018', highlights: 'Built a url system in javascript to replace Perl 5. legacy processing system. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.',
            },
            {
              job_title: 'Software Engineer / Team Lead', location: 'People Voat (project, Made During College)', job_year_duration: '2014 - 2015', highlights: 'rovided front support for the credit processing of requests (app using bases, and d3.) lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.',
            },
          ],
        }),
        created_at: new Date(),
        updated_at: new Date(),
      }];

    await queryInterface.bulkInsert('resumes', resumes);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('resumes', null, {});
  },
};
