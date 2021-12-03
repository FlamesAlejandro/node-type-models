import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { marcascamion, marcascamionId } from './marcascamion';

export interface modeloAttributes {
  id: number;
  descripcion: string;
  marcasCamionId: number;
}

export type modeloPk = "id";
export type modeloId = modelo[modeloPk];
export type modeloOptionalAttributes = "id";
export type modeloCreationAttributes = Optional<modeloAttributes, modeloOptionalAttributes>;

export class modelo extends Model<modeloAttributes, modeloCreationAttributes> implements modeloAttributes {
  id!: number;
  descripcion!: string;
  marcasCamionId!: number;

  // modelo belongsTo marcascamion via marcasCamionId
  marcasCamion!: marcascamion;
  getMarcasCamion!: Sequelize.BelongsToGetAssociationMixin<marcascamion>;
  setMarcasCamion!: Sequelize.BelongsToSetAssociationMixin<marcascamion, marcascamionId>;
  createMarcasCamion!: Sequelize.BelongsToCreateAssociationMixin<marcascamion>;

  static initModel(sequelize: Sequelize.Sequelize): typeof modelo {
    return modelo.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    marcasCamionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marcascamion',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'modelo',
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
        name: "fk_modelo_marcasCamion1_idx",
        using: "BTREE",
        fields: [
          { name: "marcasCamionId" },
        ]
      },
    ]
  });
  }
}
