import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transporte, transporteId } from './transporte';

export interface camioneroAttributes {
  id: number;
  rut: string;
  nombre: string;
  correo: string;
  telefono: string;
}

export type camioneroPk = "id";
export type camioneroId = camionero[camioneroPk];
export type camioneroOptionalAttributes = "id";
export type camioneroCreationAttributes = Optional<camioneroAttributes, camioneroOptionalAttributes>;

export class camionero extends Model<camioneroAttributes, camioneroCreationAttributes> implements camioneroAttributes {
  id!: number;
  rut!: string;
  nombre!: string;
  correo!: string;
  telefono!: string;

  // camionero hasMany transporte via camioneroId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof camionero {
    return camionero.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rut: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'camionero',
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
