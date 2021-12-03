import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transporte, transporteId } from './transporte';

export interface codigomopAttributes {
  id: number;
  codigo: number;
  descripcion: string;
}

export type codigomopPk = "id";
export type codigomopId = codigomop[codigomopPk];
export type codigomopOptionalAttributes = "id";
export type codigomopCreationAttributes = Optional<codigomopAttributes, codigomopOptionalAttributes>;

export class codigomop extends Model<codigomopAttributes, codigomopCreationAttributes> implements codigomopAttributes {
  id!: number;
  codigo!: number;
  descripcion!: string;

  // codigomop hasMany transporte via codigoMopId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof codigomop {
    return codigomop.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'codigomop',
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
