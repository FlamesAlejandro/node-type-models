import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Camionero = db.define('Camionero', {
    rut: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
});

export default Camionero;