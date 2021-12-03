import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { modelo, modeloId } from './modelo';

export interface marcascamionAttributes {
  id: number;
  descripcion: string;
}

export type marcascamionPk = "id";
export type marcascamionId = marcascamion[marcascamionPk];
export type marcascamionOptionalAttributes = "id";
export type marcascamionCreationAttributes = Optional<marcascamionAttributes, marcascamionOptionalAttributes>;

export class marcascamion extends Model<marcascamionAttributes, marcascamionCreationAttributes> implements marcascamionAttributes {
  id!: number;
  descripcion!: string;

  // marcascamion hasMany modelo via marcasCamionId
  modelos!: modelo[];
  getModelos!: Sequelize.HasManyGetAssociationsMixin<modelo>;
  setModelos!: Sequelize.HasManySetAssociationsMixin<modelo, modeloId>;
  addModelo!: Sequelize.HasManyAddAssociationMixin<modelo, modeloId>;
  addModelos!: Sequelize.HasManyAddAssociationsMixin<modelo, modeloId>;
  createModelo!: Sequelize.HasManyCreateAssociationMixin<modelo>;
  removeModelo!: Sequelize.HasManyRemoveAssociationMixin<modelo, modeloId>;
  removeModelos!: Sequelize.HasManyRemoveAssociationsMixin<modelo, modeloId>;
  hasModelo!: Sequelize.HasManyHasAssociationMixin<modelo, modeloId>;
  hasModelos!: Sequelize.HasManyHasAssociationsMixin<modelo, modeloId>;
  countModelos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof marcascamion {
    return marcascamion.init({
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
    tableName: 'marcascamion',
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
