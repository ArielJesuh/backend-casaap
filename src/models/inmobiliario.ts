import db from '../db/connection';
import { DataTypes } from 'sequelize';
import Usuario from './usuario';
import Vivienda from './vivienda';

const Inmobiliario = db.define('inmobiliario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    nombre: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    usuario_id_usuario: {
        type : DataTypes.NUMBER
    },},{
        createdAt: false,
        updatedAt: false
    });

Inmobiliario.hasMany(Vivienda, {
    foreignKey: 'inmobiliario_id_inmobiliario',
    sourceKey: 'id'
})    

Vivienda.belongsTo(Inmobiliario, {
    foreignKey: 'inmobiliario_id_inmobiliario',
    sourceKey: 'id'
})   

export default Inmobiliario;