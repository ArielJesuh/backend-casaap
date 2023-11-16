const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('casaapdb', 'samuelcid', 'Samuelcid1.', {
    host:'localhost',
    dialect: 'mysql'
});

export default sequelize;