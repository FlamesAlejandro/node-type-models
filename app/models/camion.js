const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('camion', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tara: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vigente: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'camion',
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
};
