import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { provincia, provinciaId } from './provincia';

export interface regionAttributes {
  id: number;
  descripcion: string;
  numeroRomano: string;
}

export type regionPk = "id";
export type regionId = region[regionPk];
export type regionOptionalAttributes = "id";
export type regionCreationAttributes = Optional<regionAttributes, regionOptionalAttributes>;

export class region extends Model<regionAttributes, regionCreationAttributes> implements regionAttributes {
  id!: number;
  descripcion!: string;
  numeroRomano!: string;

  // region hasMany provincia via regionId
  provincia!: provincia[];
  getProvincia!: Sequelize.HasManyGetAssociationsMixin<provincia>;
  setProvincia!: Sequelize.HasManySetAssociationsMixin<provincia, provinciaId>;
  addProvincium!: Sequelize.HasManyAddAssociationMixin<provincia, provinciaId>;
  addProvincia!: Sequelize.HasManyAddAssociationsMixin<provincia, provinciaId>;
  createProvincium!: Sequelize.HasManyCreateAssociationMixin<provincia>;
  removeProvincium!: Sequelize.HasManyRemoveAssociationMixin<provincia, provinciaId>;
  removeProvincia!: Sequelize.HasManyRemoveAssociationsMixin<provincia, provinciaId>;
  hasProvincium!: Sequelize.HasManyHasAssociationMixin<provincia, provinciaId>;
  hasProvincia!: Sequelize.HasManyHasAssociationsMixin<provincia, provinciaId>;
  countProvincia!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof region {
    return region.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    numeroRomano: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'region',
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
