import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const TipoCarga = db.define('TipoCarga', {
    descripcion: {
        type: DataTypes.STRING
    },
});

export default TipoCarga;