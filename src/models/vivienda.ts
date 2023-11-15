import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Vivienda = db.define('vivienda',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
      url_imagen: {
        type: DataTypes.STRING,
        allowNull: true,
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