import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { direccion, direccionId } from './direccion';
import type { provincia, provinciaId } from './provincia';

export interface comunaAttributes {
  id: number;
  descripcion: string;
  provinciaId: number;
}

export type comunaPk = "id";
export type comunaId = comuna[comunaPk];
export type comunaOptionalAttributes = "id";
export type comunaCreationAttributes = Optional<comunaAttributes, comunaOptionalAttributes>;

export class comuna extends Model<comunaAttributes, comunaCreationAttributes> implements comunaAttributes {
  id!: number;
  descripcion!: string;
  provinciaId!: number;

  // comuna hasMany direccion via comunaId
  direccions!: direccion[];
  getDireccions!: Sequelize.HasManyGetAssociationsMixin<direccion>;
  setDireccions!: Sequelize.HasManySetAssociationsMixin<direccion, direccionId>;
  addDireccion!: Sequelize.HasManyAddAssociationMixin<direccion, direccionId>;
  addDireccions!: Sequelize.HasManyAddAssociationsMixin<direccion, direccionId>;
  createDireccion!: Sequelize.HasManyCreateAssociationMixin<direccion>;
  removeDireccion!: Sequelize.HasManyRemoveAssociationMixin<direccion, direccionId>;
  removeDireccions!: Sequelize.HasManyRemoveAssociationsMixin<direccion, direccionId>;
  hasDireccion!: Sequelize.HasManyHasAssociationMixin<direccion, direccionId>;
  hasDireccions!: Sequelize.HasManyHasAssociationsMixin<direccion, direccionId>;
  countDireccions!: Sequelize.HasManyCountAssociationsMixin;
  // comuna belongsTo provincia via provinciaId
  provincium!: provincia;
  getProvincium!: Sequelize.BelongsToGetAssociationMixin<provincia>;
  setProvincium!: Sequelize.BelongsToSetAssociationMixin<provincia, provinciaId>;
  createProvincium!: Sequelize.BelongsToCreateAssociationMixin<provincia>;

  static initModel(sequelize: Sequelize.Sequelize): typeof comuna {
    return comuna.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    provinciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'provincia',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'comuna',
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
        name: "fk_comuna_provincia1_idx",
        using: "BTREE",
        fields: [
          { name: "provinciaId" },
        ]
      },
    ]
  });
  }
}
