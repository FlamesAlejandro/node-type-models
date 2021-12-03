import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const TipoTransporte = db.define('TipoTransporte', {
    descripcion: {
        type: DataTypes.STRING
    },
});

export default TipoTransporte;