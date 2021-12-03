const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transporte', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    camionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'camion',
        key: 'id'
      }
    },
    empresaCamionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresacamion',
        key: 'id'
      }
    },
    direccionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direccion',
        key: 'id'
      }
    },
    camioneroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'camionero',
        key: 'id'
      }
    },
    carroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'carro',
        key: 'id'
      }
    },
    tipoCargaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipocarga',
        key: 'id'
      }
    },
    tipoTransporteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipotransporte',
        key: 'id'
      }
    },
    variedadCargaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'variedadcarga',
        key: 'id'
      }
    },
    codigoMopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'codigomop',
        key: 'id'
      }
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    seguroCarga: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    potrero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    vigente: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'transporte',
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
        name: "fk_ordenTraslado_camion1_idx",
        using: "BTREE",
        fields: [
          { name: "camionId" },
        ]
      },
      {
        name: "fk_ordenTraslado_empresaCamion1_idx",
        using: "BTREE",
        fields: [
          { name: "empresaCamionId" },
        ]
      },
      {
        name: "fk_ordenTraslado_direccion1_idx",
        using: "BTREE",
        fields: [
          { name: "direccionId" },
        ]
      },
      {
        name: "fk_ordenTraslado_camionero1_idx",
        using: "BTREE",
        fields: [
          { name: "camioneroId" },
        ]
      },
      {
        name: "fk_ordenTraslado_carro1_idx",
        using: "BTREE",
        fields: [
          { name: "carroId" },
        ]
      },
      {
        name: "fk_trasnporte_tipoCarga1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoCargaId" },
        ]
      },
      {
        name: "fk_trasnporte_tipoTransporte1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoTransporteId" },
        ]
      },
      {
        name: "fk_trasnporte_variedadCarga1_idx",
        using: "BTREE",
        fields: [
          { name: "variedadCargaId" },
        ]
      },
      {
        name: "fk_trasnporte_codigoMop1_idx",
        using: "BTREE",
        fields: [
          { name: "codigoMopId" },
        ]
      },
      {
        name: "fk_trasnporte_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "usuarioId" },
        ]
      },
    ]
  });
};
