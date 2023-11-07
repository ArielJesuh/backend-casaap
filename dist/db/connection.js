"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('casaapdb', 'samuelcid', 'Samuelcid1.', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
