import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transporte, transporteId } from './transporte';

export interface tipocargaAttributes {
  id: number;
  descripcion: string;
}

export type tipocargaPk = "id";
export type tipocargaId = tipocarga[tipocargaPk];
export type tipocargaOptionalAttributes = "id";
export type tipocargaCreationAttributes = Optional<tipocargaAttributes, tipocargaOptionalAttributes>;

export class tipocarga extends Model<tipocargaAttributes, tipocargaCreationAttributes> implements tipocargaAttributes {
  id!: number;
  descripcion!: string;

  // tipocarga hasMany transporte via tipoCargaId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof tipocarga {
    return tipocarga.init({
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
    tableName: 'tipocarga',
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
