const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuariorol', {
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
};
