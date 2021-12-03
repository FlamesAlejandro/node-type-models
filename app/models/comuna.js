const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comuna', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    provinciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'provincia',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'comuna',
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
        name: "fk_comuna_provincia1_idx",
        using: "BTREE",
        fields: [
          { name: "provinciaId" },
        ]
      },
    ]
  });
};
