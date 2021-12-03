import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const MarcasCamion = db.define('MarcasCamion', {
    descripcion: {
        type: DataTypes.STRING
    },
});

export default MarcasCamion;