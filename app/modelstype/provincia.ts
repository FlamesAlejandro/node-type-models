import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { comuna, comunaId } from './comuna';
import type { region, regionId } from './region';

export interface provinciaAttributes {
  id: number;
  descripcion: string;
  regionId: number;
}

export type provinciaPk = "id";
export type provinciaId = provincia[provinciaPk];
export type provinciaOptionalAttributes = "id";
export type provinciaCreationAttributes = Optional<provinciaAttributes, provinciaOptionalAttributes>;

export class provincia extends Model<provinciaAttributes, provinciaCreationAttributes> implements provinciaAttributes {
  id!: number;
  descripcion!: string;
  regionId!: number;

  // provincia hasMany comuna via provinciaId
  comunas!: comuna[];
  getComunas!: Sequelize.HasManyGetAssociationsMixin<comuna>;
  setComunas!: Sequelize.HasManySetAssociationsMixin<comuna, comunaId>;
  addComuna!: Sequelize.HasManyAddAssociationMixin<comuna, comunaId>;
  addComunas!: Sequelize.HasManyAddAssociationsMixin<comuna, comunaId>;
  createComuna!: Sequelize.HasManyCreateAssociationMixin<comuna>;
  removeComuna!: Sequelize.HasManyRemoveAssociationMixin<comuna, comunaId>;
  removeComunas!: Sequelize.HasManyRemoveAssociationsMixin<comuna, comunaId>;
  hasComuna!: Sequelize.HasManyHasAssociationMixin<comuna, comunaId>;
  hasComunas!: Sequelize.HasManyHasAssociationsMixin<comuna, comunaId>;
  countComunas!: Sequelize.HasManyCountAssociationsMixin;
  // provincia belongsTo region via regionId
  region!: region;
  getRegion!: Sequelize.BelongsToGetAssociationMixin<region>;
  setRegion!: Sequelize.BelongsToSetAssociationMixin<region, regionId>;
  createRegion!: Sequelize.BelongsToCreateAssociationMixin<region>;

  static initModel(sequelize: Sequelize.Sequelize): typeof provincia {
    return provincia.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    regionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'provincia',
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
        name: "fk_provincia_region1_idx",
        using: "BTREE",
        fields: [
          { name: "regionId" },
        ]
      },
    ]
  });
  }
}
