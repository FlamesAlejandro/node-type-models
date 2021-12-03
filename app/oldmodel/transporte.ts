import { DataTypes } from 'sequelize';
import db from '../../config/db/connection';

const Transporte = db.define('Transporte', {
    camionId: {
        type: DataTypes.INTEGER
    },
    empresaCamionId: {
        type: DataTypes.INTEGER
    },
    direccionId: {
        type: DataTypes.INTEGER
    },
    camioneroId: {
        type: DataTypes.INTEGER
    },
    carroId: {
        type: DataTypes.INTEGER
    },
    tipoCargaId: {
        type: DataTypes.INTEGER
    },
    tipoTransporteId: {
        type: DataTypes.INTEGER
    },
    variedadCargaId: {
        type: DataTypes.INTEGER
    },
    codigoMopId: {
        type: DataTypes.INTEGER
    },
    usuarioId: {
        type: DataTypes.INTEGER
    },
    seguroCarga: {
        type: DataTypes.STRING
    },
    potrero: {
        type: DataTypes.STRING
    },
    vigente: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
});

export default Transporte;