"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('casaapdb', 'root', 'Hielito123!', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
