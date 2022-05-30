import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';
import initResumeModel from './resume.mjs';
import initIndustryModel from './industry.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Resume = initResumeModel(sequelize, Sequelize.DataTypes);
db.Industry = initIndustryModel(sequelize, Sequelize.DataTypes);

db.User.hasMany(db.Resume);
db.Resume.belongsTo(db.User);

db.Resume.belongsToMany(db.Industry, { through: 'resumes_industries' });
db.Industry.belongsToMany(db.Resume, { through: 'resumes_industries' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
