import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Filtro = db.define('filtro',{
    cantidad_habitaciones: {
        type : DataTypes.NUMBER,
        allowNull: true, // Permite nulos para cantidad_habitaciones
    },
    cantidad_banos: {
        type : DataTypes.NUMBER,
        allowNull: true, // Permite nulos para cantidad_banos
    },
    max_valor: {
        type : DataTypes.NUMBER,
        allowNull: true, // Permite nulos para max_valor
    },
    min_valor: {
        type : DataTypes.NUMBER,
        allowNull: true, // Permite nulos para min_valor
    },
    comuna_id_comuna: {
        type : DataTypes.NUMBER,
        allowNull: true, // Permite nulos para comuna_id_comuna
    },
    usuario_id_usuario: {
        type : DataTypes.NUMBER,
    }},{
        createdAt: false,
        updatedAt: false
    });

export default Filtro;
