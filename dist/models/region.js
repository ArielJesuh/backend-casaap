"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Region = connection_1.default.define('region', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre_region: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Region;
