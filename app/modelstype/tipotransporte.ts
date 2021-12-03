import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transporte, transporteId } from './transporte';

export interface tipotransporteAttributes {
  id: number;
  descripcion: string;
}

export type tipotransportePk = "id";
export type tipotransporteId = tipotransporte[tipotransportePk];
export type tipotransporteOptionalAttributes = "id";
export type tipotransporteCreationAttributes = Optional<tipotransporteAttributes, tipotransporteOptionalAttributes>;

export class tipotransporte extends Model<tipotransporteAttributes, tipotransporteCreationAttributes> implements tipotransporteAttributes {
  id!: number;
  descripcion!: string;

  // tipotransporte hasMany transporte via tipoTransporteId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof tipotransporte {
    return tipotransporte.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipotransporte',
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
