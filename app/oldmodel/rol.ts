import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Rol = db.define('Rol', {
    descripcion: {
        type: DataTypes.STRING
    },
    vigente: {
        type: DataTypes.TINYINT
    },
});

export default Rol;