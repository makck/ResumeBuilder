import { resolve } from 'path';
import db from './models/index.mjs';

import initUsersController from './controllers/users.mjs';
import initResumesController from './controllers/resumes.mjs';

export default function routes(app) {
  const UsersController = initUsersController(db);
  const ResumesController = initResumesController(db);

  app.post('/create-user', UsersController.createUser);

  app.post('/create-resume', ResumesController.createResume);

  app.get('/collection-list', ResumesController.getCollection);

  app.get('/*', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
