import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Provincia = db.define('Provincia', {
    descripcion: {
        type: DataTypes.STRING
    },
    regionId: {
        type: DataTypes.INTEGER
    },
});

export default Provincia;