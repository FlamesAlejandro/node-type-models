import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Empresa = db.define('Empresa', {
    rut: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
});

export default Empresa;