import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { rol, rolId } from './rol';
import type { usuario, usuarioId } from './usuario';

export interface usuariorolAttributes {
  id: number;
  vigente: number;
  usuarioId: number;
  rolId: number;
}

export type usuariorolPk = "id";
export type usuariorolId = usuariorol[usuariorolPk];
export type usuariorolOptionalAttributes = "id";
export type usuariorolCreationAttributes = Optional<usuariorolAttributes, usuariorolOptionalAttributes>;

export class usuariorol extends Model<usuariorolAttributes, usuariorolCreationAttributes> implements usuariorolAttributes {
  id!: number;
  vigente!: number;
  usuarioId!: number;
  rolId!: number;

  // usuariorol belongsTo rol via rolId
  rol!: rol;
  getRol!: Sequelize.BelongsToGetAssociationMixin<rol>;
  setRol!: Sequelize.BelongsToSetAssociationMixin<rol, rolId>;
  createRol!: Sequelize.BelongsToCreateAssociationMixin<rol>;
  // usuariorol belongsTo usuario via usuarioId
  usuario!: usuario;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuario>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuario, usuarioId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof usuariorol {
    return usuariorol.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vigente: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rol',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'usuariorol',
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
        name: "fk_usuarioRol_usuario_idx",
        using: "BTREE",
        fields: [
          { name: "usuarioId" },
        ]
      },
      {
        name: "fk_usuarioRol_rol1_idx",
        using: "BTREE",
        fields: [
          { name: "rolId" },
        ]
      },
    ]
  });
  }
}
