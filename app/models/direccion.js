const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direccion', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    numeroDireccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adicionalDireccion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa',
        key: 'id'
      }
    },
    comunaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comuna',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'direccion',
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
        name: "fk_direccion_empresas1_idx",
        using: "BTREE",
        fields: [
          { name: "empresaId" },
        ]
      },
      {
        name: "fk_direccion_comuna1_idx",
        using: "BTREE",
        fields: [
          { name: "comunaId" },
        ]
      },
    ]
  });
};
