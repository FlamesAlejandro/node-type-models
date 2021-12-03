import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuariorol, usuariorolId } from './usuariorol';

export interface rolAttributes {
  id: number;
  descripcion: string;
  vigente: number;
}

export type rolPk = "id";
export type rolId = rol[rolPk];
export type rolOptionalAttributes = "id";
export type rolCreationAttributes = Optional<rolAttributes, rolOptionalAttributes>;

export class rol extends Model<rolAttributes, rolCreationAttributes> implements rolAttributes {
  id!: number;
  descripcion!: string;
  vigente!: number;

  // rol hasMany usuariorol via rolId
  usuariorols!: usuariorol[];
  getUsuariorols!: Sequelize.HasManyGetAssociationsMixin<usuariorol>;
  setUsuariorols!: Sequelize.HasManySetAssociationsMixin<usuariorol, usuariorolId>;
  addUsuariorol!: Sequelize.HasManyAddAssociationMixin<usuariorol, usuariorolId>;
  addUsuariorols!: Sequelize.HasManyAddAssociationsMixin<usuariorol, usuariorolId>;
  createUsuariorol!: Sequelize.HasManyCreateAssociationMixin<usuariorol>;
  removeUsuariorol!: Sequelize.HasManyRemoveAssociationMixin<usuariorol, usuariorolId>;
  removeUsuariorols!: Sequelize.HasManyRemoveAssociationsMixin<usuariorol, usuariorolId>;
  hasUsuariorol!: Sequelize.HasManyHasAssociationMixin<usuariorol, usuariorolId>;
  hasUsuariorols!: Sequelize.HasManyHasAssociationsMixin<usuariorol, usuariorolId>;
  countUsuariorols!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof rol {
    return rol.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    vigente: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rol',
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
