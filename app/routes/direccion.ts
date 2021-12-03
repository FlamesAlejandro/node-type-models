import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Direccion = db.define('Direccion', {
    direccion: {
        type: DataTypes.STRING
    },
    numeroDireccion: {
        type: DataTypes.INTEGER
    },
    adicionalDireccion: {
        type: DataTypes.STRING
    },
    empresaId: {
        type: DataTypes.INTEGER
    },
    comunaId: {
        type: DataTypes.INTEGER 
    },
});

export default Direccion;