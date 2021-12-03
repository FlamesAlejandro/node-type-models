import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Camion = db.define('Camion', {
    patente: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    anio: {
        type: DataTypes.INTEGER
    },
    tara: {
        type: DataTypes.INTEGER
    },
    vigente: {
        type: DataTypes.INTEGER
    },
});

export default Camion;