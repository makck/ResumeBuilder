import { resolve } from 'path';
import db from './models/index.mjs';

import initUsersController from './controllers/users.mjs';

export default function routes(app) {
  const UsersController = initUsersController(db);

  app.post('/create-user', UsersController.createUser);

  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
