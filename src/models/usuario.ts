import db from '../db/connection';
import { DataTypes } from 'sequelize';
import Inmobiliario from './inmobiliario';

const Usuario = db.define('usuario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    nombre_usuario: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    contrasena: {
        type : DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    email: {
        type : DataTypes.STRING
    },
    run: {
        type : DataTypes.STRING
    },
    telefono: {
        type : DataTypes.NUMBER
    },
    tipo: {
        type : DataTypes.NUMBER
    }},{
        createdAt: false,
        updatedAt: false
    });

Usuario.hasMany(Inmobiliario, {
    foreignKey: 'usuario_id_usuario',
    sourceKey: 'id'
})    

Inmobiliario.belongsTo(Usuario, {
    foreignKey: 'usuario_id_usuario',
    sourceKey: 'id'
})    

export default Usuario;