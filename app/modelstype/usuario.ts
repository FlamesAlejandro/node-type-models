import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { transporte, transporteId } from './transporte';
import type { usuariorol, usuariorolId } from './usuariorol';

export interface usuarioAttributes {
  id: number;
  email: string;
  nombre: string;
  password: string;
  estado: number;
  fechaCreacion: Date;
  fechaEdicion?: Date;
}

export type usuarioPk = "id";
export type usuarioId = usuario[usuarioPk];
export type usuarioOptionalAttributes = "id" | "fechaCreacion" | "fechaEdicion";
export type usuarioCreationAttributes = Optional<usuarioAttributes, usuarioOptionalAttributes>;

export class usuario extends Model<usuarioAttributes, usuarioCreationAttributes> implements usuarioAttributes {
  id!: number;
  email!: string;
  nombre!: string;
  password!: string;
  estado!: number;
  fechaCreacion!: Date;
  fechaEdicion?: Date;

  // usuario hasMany transporte via usuarioId
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
  // usuario hasMany usuariorol via usuarioId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof usuario {
    return usuario.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    fechaEdicion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
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
