import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Inmobiliario = db.define('inmobiliario',{
    nombre: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    usuario_id_usuario: {
        type : DataTypes.NUMBER,
        unique:true,
        allowNull:false
    }},{
        createdAt: false,
        updatedAt: false
    });

export default Inmobiliario;