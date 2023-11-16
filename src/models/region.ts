import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Region = db.define('region',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    nombre_region: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    },{
        createdAt: false,
        updatedAt: false
    });

export default Region;