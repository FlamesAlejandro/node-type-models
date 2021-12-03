import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Usuario = db.define('Usuario', {
    email: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },


},
    {
        createdAt: false,
        updatedAt: false,
        tableName: "Usuario"
    }
);

export default Usuario;