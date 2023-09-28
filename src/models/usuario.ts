import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Usuario = db.define('usuario',{
    nombre_usuario: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    contrasena: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    email: {
        type : DataTypes.STRING
    },
    run: {
        type : DataTypes.STRING
    },
    telefono: {
        type : DataTypes.NUMBER
    },
    tipo: {
        type : DataTypes.NUMBER
    }},{
        createdAt: false,
        updatedAt: false
    });

export default Usuario;