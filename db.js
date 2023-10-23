const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'apl_user', 
  password: 'GArtwNlv1VOchMR4Avp2QeBfC5Kfq7AM', 
  host: 'dpg-ckqrd8g5vl2c7395g2p0-a.oregon-postgres.render.com/apl', 
  database: 'apl-dev',
});

module.exports = sequelize;
