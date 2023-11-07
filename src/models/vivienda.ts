import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Vivienda = db.define('vivienda',{
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cantidad_habitaciones: {
        type: DataTypes.INTEGER,
      },
      cantidad_banos: {
        type: DataTypes.INTEGER,
      },
      metros_cuadrados: {
        type: DataTypes.INTEGER,
      },
      valor_uf: {
        type: DataTypes.INTEGER,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comuna_id_comuna: {
        type: DataTypes.INTEGER,
      },
      inmobiliario_id_inmobiliario: {
        type: DataTypes.INTEGER,
      }},{
        createdAt: false,
        updatedAt: false
    });

export default Vivienda;