const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('casaapdb', 'root', 'Hielito123!', {

    host:'localhost',
    dialect: 'mysql'
});

export default sequelize;