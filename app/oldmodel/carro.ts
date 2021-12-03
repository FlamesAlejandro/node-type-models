import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Carro = db.define('Carro', {
    descripcion: {
        type: DataTypes.STRING
    },
    patente: {
        type: DataTypes.STRING
    },
});

export default Carro;