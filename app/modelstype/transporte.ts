import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { camion, camionId } from './camion';
import type { camionero, camioneroId } from './camionero';
import type { carro, carroId } from './carro';
import type { codigomop, codigomopId } from './codigomop';
import type { direccion, direccionId } from './direccion';
import type { empresacamion, empresacamionId } from './empresacamion';
import type { tipocarga, tipocargaId } from './tipocarga';
import type { tipotransporte, tipotransporteId } from './tipotransporte';
import type { usuario, usuarioId } from './usuario';
import type { variedadcarga, variedadcargaId } from './variedadcarga';

export interface transporteAttributes {
  id: number;
  camionId: number;
  empresaCamionId: number;
  direccionId: number;
  camioneroId: number;
  carroId: number;
  tipoCargaId: number;
  tipoTransporteId: number;
  variedadCargaId: number;
  codigoMopId: number;
  usuarioId: number;
  seguroCarga: number;
  potrero: string;
  vigente: number;
  fecha: Date;
}

export type transportePk = "id";
export type transporteId = transporte[transportePk];
export type transporteOptionalAttributes = "id" | "fecha";
export type transporteCreationAttributes = Optional<transporteAttributes, transporteOptionalAttributes>;

export class transporte extends Model<transporteAttributes, transporteCreationAttributes> implements transporteAttributes {
  id!: number;
  camionId!: number;
  empresaCamionId!: number;
  direccionId!: number;
  camioneroId!: number;
  carroId!: number;
  tipoCargaId!: number;
  tipoTransporteId!: number;
  variedadCargaId!: number;
  codigoMopId!: number;
  usuarioId!: number;
  seguroCarga!: number;
  potrero!: string;
  vigente!: number;
  fecha!: Date;

  // transporte belongsTo camion via camionId
  camion!: camion;
  getCamion!: Sequelize.BelongsToGetAssociationMixin<camion>;
  setCamion!: Sequelize.BelongsToSetAssociationMixin<camion, camionId>;
  createCamion!: Sequelize.BelongsToCreateAssociationMixin<camion>;
  // transporte belongsTo camionero via camioneroId
  camionero!: camionero;
  getCamionero!: Sequelize.BelongsToGetAssociationMixin<camionero>;
  setCamionero!: Sequelize.BelongsToSetAssociationMixin<camionero, camioneroId>;
  createCamionero!: Sequelize.BelongsToCreateAssociationMixin<camionero>;
  // transporte belongsTo carro via carroId
  carro!: carro;
  getCarro!: Sequelize.BelongsToGetAssociationMixin<carro>;
  setCarro!: Sequelize.BelongsToSetAssociationMixin<carro, carroId>;
  createCarro!: Sequelize.BelongsToCreateAssociationMixin<carro>;
  // transporte belongsTo codigomop via codigoMopId
  codigoMop!: codigomop;
  getCodigoMop!: Sequelize.BelongsToGetAssociationMixin<codigomop>;
  setCodigoMop!: Sequelize.BelongsToSetAssociationMixin<codigomop, codigomopId>;
  createCodigoMop!: Sequelize.BelongsToCreateAssociationMixin<codigomop>;
  // transporte belongsTo direccion via direccionId
  direccion!: direccion;
  getDireccion!: Sequelize.BelongsToGetAssociationMixin<direccion>;
  setDireccion!: Sequelize.BelongsToSetAssociationMixin<direccion, direccionId>;
  createDireccion!: Sequelize.BelongsToCreateAssociationMixin<direccion>;
  // transporte belongsTo empresacamion via empresaCamionId
  empresaCamion!: empresacamion;
  getEmpresaCamion!: Sequelize.BelongsToGetAssociationMixin<empresacamion>;
  setEmpresaCamion!: Sequelize.BelongsToSetAssociationMixin<empresacamion, empresacamionId>;
  createEmpresaCamion!: Sequelize.BelongsToCreateAssociationMixin<empresacamion>;
  // transporte belongsTo tipocarga via tipoCargaId
  tipoCarga!: tipocarga;
  getTipoCarga!: Sequelize.BelongsToGetAssociationMixin<tipocarga>;
  setTipoCarga!: Sequelize.BelongsToSetAssociationMixin<tipocarga, tipocargaId>;
  createTipoCarga!: Sequelize.BelongsToCreateAssociationMixin<tipocarga>;
  // transporte belongsTo tipotransporte via tipoTransporteId
  tipoTransporte!: tipotransporte;
  getTipoTransporte!: Sequelize.BelongsToGetAssociationMixin<tipotransporte>;
  setTipoTransporte!: Sequelize.BelongsToSetAssociationMixin<tipotransporte, tipotransporteId>;
  createTipoTransporte!: Sequelize.BelongsToCreateAssociationMixin<tipotransporte>;
  // transporte belongsTo usuario via usuarioId
  usuario!: usuario;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuario>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuario, usuarioId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuario>;
  // transporte belongsTo variedadcarga via variedadCargaId
  variedadCarga!: variedadcarga;
  getVariedadCarga!: Sequelize.BelongsToGetAssociationMixin<variedadcarga>;
  setVariedadCarga!: Sequelize.BelongsToSetAssociationMixin<variedadcarga, variedadcargaId>;
  createVariedadCarga!: Sequelize.BelongsToCreateAssociationMixin<variedadcarga>;

  static initModel(sequelize: Sequelize.Sequelize): typeof transporte {
    return transporte.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    camionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'camion',
        key: 'id'
      }
    },
    empresaCamionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresacamion',
        key: 'id'
      }
    },
    direccionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direccion',
        key: 'id'
      }
    },
    camioneroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'camionero',
        key: 'id'
      }
    },
    carroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'carro',
        key: 'id'
      }
    },
    tipoCargaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipocarga',
        key: 'id'
      }
    },
    tipoTransporteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipotransporte',
        key: 'id'
      }
    },
    variedadCargaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'variedadcarga',
        key: 'id'
      }
    },
    codigoMopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'codigomop',
        key: 'id'
      }
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    seguroCarga: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    potrero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    vigente: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'transporte',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_ordenTraslado_camion1_idx",
        using: "BTREE",
        fields: [
          { name: "camionId" },
        ]
      },
      {
        name: "fk_ordenTraslado_empresaCamion1_idx",
        using: "BTREE",
        fields: [
          { name: "empresaCamionId" },
        ]
      },
      {
        name: "fk_ordenTraslado_direccion1_idx",
        using: "BTREE",
        fields: [
          { name: "direccionId" },
        ]
      },
      {
        name: "fk_ordenTraslado_camionero1_idx",
        using: "BTREE",
        fields: [
          { name: "camioneroId" },
        ]
      },
      {
        name: "fk_ordenTraslado_carro1_idx",
        using: "BTREE",
        fields: [
          { name: "carroId" },
        ]
      },
      {
        name: "fk_trasnporte_tipoCarga1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoCargaId" },
        ]
      },
      {
        name: "fk_trasnporte_tipoTransporte1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoTransporteId" },
        ]
      },
      {
        name: "fk_trasnporte_variedadCarga1_idx",
        using: "BTREE",
        fields: [
          { name: "variedadCargaId" },
        ]
      },
      {
        name: "fk_trasnporte_codigoMop1_idx",
        using: "BTREE",
        fields: [
          { name: "codigoMopId" },
        ]
      },
      {
        name: "fk_trasnporte_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "usuarioId" },
        ]
      },
    ]
  });
  }
}
