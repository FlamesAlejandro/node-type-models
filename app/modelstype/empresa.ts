import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { direccion, direccionId } from './direccion';

export interface empresaAttributes {
  id: number;
  rut: string;
  descripcion: string;
}

export type empresaPk = "id";
export type empresaId = empresa[empresaPk];
export type empresaOptionalAttributes = "id";
export type empresaCreationAttributes = Optional<empresaAttributes, empresaOptionalAttributes>;

export class empresa extends Model<empresaAttributes, empresaCreationAttributes> implements empresaAttributes {
  id!: number;
  rut!: string;
  descripcion!: string;

  // empresa hasMany direccion via empresaId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof empresa {
    return empresa.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rut: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empresa',
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
    ]
  });
  }
}
