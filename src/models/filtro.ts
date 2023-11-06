import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Filtro = db.define('filtro',{
    cantidad_habitaciones: {
        type : DataTypes.NUMBER,
    },
    cantidad_banos: {
        type : DataTypes.NUMBER,
    },
    max_valor: {
        type : DataTypes.NUMBER
    },
    min_valor: {
        type : DataTypes.NUMBER
    },
    comuna_id_comuna: {
        type : DataTypes.NUMBER
    },
    usuario_id_usuario: {
        type : DataTypes.NUMBER
    }},{
        createdAt: false,
        updatedAt: false
    });

export default Filtro;