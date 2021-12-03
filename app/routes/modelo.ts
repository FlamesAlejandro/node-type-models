import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Modelo = db.define('Modelo', {
    descripcion: {
        type: DataTypes.STRING
    },
    marcasCamionId: {
        type: DataTypes.INTEGER
    },
});

export default Modelo;