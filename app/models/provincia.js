const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincia', {
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
};
