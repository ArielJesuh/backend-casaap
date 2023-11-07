import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Comuna = db.define('comuna',{
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

export default Comuna;