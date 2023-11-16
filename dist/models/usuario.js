"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const inmobiliario_1 = __importDefault(require("./inmobiliario"));
const Usuario = connection_1.default.define('usuario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre_usuario: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    run: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.NUMBER
    },
    tipo: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});
Usuario.hasMany(inmobiliario_1.default, {
    foreignKey: 'usuario_id_usuario',
    sourceKey: 'id'
});
inmobiliario_1.default.belongsTo(Usuario, {
    foreignKey: 'usuario_id_usuario',
    sourceKey: 'id'
});
exports.default = Usuario;
