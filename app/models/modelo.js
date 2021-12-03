const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelo', {
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
};
