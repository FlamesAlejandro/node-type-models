import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { comuna, comunaId } from './comuna';
import type { empresa, empresaId } from './empresa';
import type { transporte, transporteId } from './transporte';

export interface direccionAttributes {
  id: number;
  direccion: string;
  numeroDireccion: number;
  adicionalDireccion: string;
  empresaId: number;
  comunaId: number;
}

export type direccionPk = "id";
export type direccionId = direccion[direccionPk];
export type direccionOptionalAttributes = "id";
export type direccionCreationAttributes = Optional<direccionAttributes, direccionOptionalAttributes>;

export class direccion extends Model<direccionAttributes, direccionCreationAttributes> implements direccionAttributes {
  id!: number;
  direccion!: string;
  numeroDireccion!: number;
  adicionalDireccion!: string;
  empresaId!: number;
  comunaId!: number;

  // direccion belongsTo comuna via comunaId
  comuna!: comuna;
  getComuna!: Sequelize.BelongsToGetAssociationMixin<comuna>;
  setComuna!: Sequelize.BelongsToSetAssociationMixin<comuna, comunaId>;
  createComuna!: Sequelize.BelongsToCreateAssociationMixin<comuna>;
  // direccion hasMany transporte via direccionId
  transportes!: transporte[];
  getTransportes!: Sequelize.HasManyGetAssociationsMixin<transporte>;
  setTransportes!: Sequelize.HasManySetAssociationsMixin<transporte, transporteId>;
  addTransporte!: Sequelize.HasManyAddAssociationMixin<transporte, transporteId>;
  addTransportes!: Sequelize.HasManyAddAssociationsMixin<transporte, transporteId>;
  createTransporte!: Sequelize.HasManyCreateAssociationMixin<transporte>;
  removeTransporte!: Sequelize.HasManyRemoveAssociationMixin<transporte, transporteId>;
  removeTransportes!: Sequelize.HasManyRemoveAssociationsMixin<transporte, transporteId>;
  hasTransporte!: Sequelize.HasManyHasAssociationMixin<transporte, transporteId>;
  hasTransportes!: Sequelize.HasManyHasAssociationsMixin<transporte, transporteId>;
  countTransportes!: Sequelize.HasManyCountAssociationsMixin;
  // direccion belongsTo empresa via empresaId
  empresa!: empresa;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<empresa>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<empresa, empresaId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<empresa>;

  static initModel(sequelize: Sequelize.Sequelize): typeof direccion {
    return direccion.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    numeroDireccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adicionalDireccion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'id'
      }
    },
    comunaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comuna',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'direccion',
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
        name: "fk_direccion_empresas1_idx",
        using: "BTREE",
        fields: [
          { name: "empresaId" },
        ]
      },
      {
        name: "fk_direccion_comuna1_idx",
        using: "BTREE",
        fields: [
          { name: "comunaId" },
        ]
      },
    ]
  });
  }
}
