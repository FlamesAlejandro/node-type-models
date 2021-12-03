import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Comuna = db.define('Comuna', {
    descripcion: {
        type: DataTypes.STRING
    },
    provinciaId: {
        type: DataTypes.INTEGER
    },
});

export default Comuna;