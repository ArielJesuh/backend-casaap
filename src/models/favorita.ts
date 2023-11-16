import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Favorita = db.define('favorita',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      usuario_id_usuario: {
        type: DataTypes.INTEGER,
      },
      vivienda_id_vivienda: {
        type: DataTypes.INTEGER,
      }},{
        createdAt: false,
        updatedAt: false
    });

export default Favorita;