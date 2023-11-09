import db from '../db/connection';
import { DataTypes } from 'sequelize';
import Vivienda from './vivienda';

const Comuna = db.define('comuna',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    nombre_comuna: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    region_id_region: {
        type : DataTypes.NUMBER,
    }},{
        createdAt: false,
        updatedAt: false
    });

Comuna.hasMany(Vivienda, {
    foreignKey: 'comuna_id_comuna',
    sourceKey: 'id'
})

Vivienda.belongsTo(Comuna, {
    foreignKey: 'comuna_id_comuna',
    sourceKey: 'id'
})

export default Comuna;