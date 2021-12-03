import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transporte, transporteId } from './transporte';

export interface camionAttributes {
  id: number;
  patente: string;
  marca: string;
  modelo: string;
  anio: number;
  tara: number;
  vigente: number;
}

export type camionPk = "id";
export type camionId = camion[camionPk];
export type camionOptionalAttributes = "id";
export type camionCreationAttributes = Optional<camionAttributes, camionOptionalAttributes>;

export class camion extends Model<camionAttributes, camionCreationAttributes> implements camionAttributes {
  id!: number;
  patente!: string;
  marca!: string;
  modelo!: string;
  anio!: number;
  tara!: number;
  vigente!: number;

  // camion hasMany transporte via camionId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof camion {
    return camion.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tara: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vigente: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'camion',
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
