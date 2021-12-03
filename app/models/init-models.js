var DataTypes = require("sequelize").DataTypes;
var _camion = require("./camion");
var _camionero = require("./camionero");
var _carro = require("./carro");
var _codigomop = require("./codigomop");
var _comuna = require("./comuna");
var _direccion = require("./direccion");
var _empresa = require("./empresa");
var _empresacamion = require("./empresacamion");
var _marcascamion = require("./marcascamion");
var _modelo = require("./modelo");
var _provincia = require("./provincia");
var _region = require("./region");
var _rol = require("./rol");
var _tipocarga = require("./tipocarga");
var _tipotransporte = require("./tipotransporte");
var _transporte = require("./transporte");
var _usuario = require("./usuario");
var _usuariorol = require("./usuariorol");
var _variedadcarga = require("./variedadcarga");

function initModels(sequelize) {
  var camion = _camion(sequelize, DataTypes);
  var camionero = _camionero(sequelize, DataTypes);
  var carro = _carro(sequelize, DataTypes);
  var codigomop = _codigomop(sequelize, DataTypes);
  var comuna = _comuna(sequelize, DataTypes);
  var direccion = _direccion(sequelize, DataTypes);
  var empresa = _empresa(sequelize, DataTypes);
  var empresacamion = _empresacamion(sequelize, DataTypes);
  var marcascamion = _marcascamion(sequelize, DataTypes);
  var modelo = _modelo(sequelize, DataTypes);
  var provincia = _provincia(sequelize, DataTypes);
  var region = _region(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var tipocarga = _tipocarga(sequelize, DataTypes);
  var tipotransporte = _tipotransporte(sequelize, DataTypes);
  var transporte = _transporte(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var usuariorol = _usuariorol(sequelize, DataTypes);
  var variedadcarga = _variedadcarga(sequelize, DataTypes);

  transporte.belongsTo(camion, { as: "camion", foreignKey: "camionId"});
  camion.hasMany(transporte, { as: "transportes", foreignKey: "camionId"});
  transporte.belongsTo(camionero, { as: "camionero", foreignKey: "camioneroId"});
  camionero.hasMany(transporte, { as: "transportes", foreignKey: "camioneroId"});
  transporte.belongsTo(carro, { as: "carro", foreignKey: "carroId"});
  carro.hasMany(transporte, { as: "transportes", foreignKey: "carroId"});
  transporte.belongsTo(codigomop, { as: "codigoMop", foreignKey: "codigoMopId"});
  codigomop.hasMany(transporte, { as: "transportes", foreignKey: "codigoMopId"});
  direccion.belongsTo(comuna, { as: "comuna", foreignKey: "comunaId"});
  comuna.hasMany(direccion, { as: "direccions", foreignKey: "comunaId"});
  transporte.belongsTo(direccion, { as: "direccion", foreignKey: "direccionId"});
  direccion.hasMany(transporte, { as: "transportes", foreignKey: "direccionId"});
  direccion.belongsTo(empresa, { as: "empresa", foreignKey: "empresaId"});
  empresa.hasMany(direccion, { as: "direccions", foreignKey: "empresaId"});
  transporte.belongsTo(empresacamion, { as: "empresaCamion", foreignKey: "empresaCamionId"});
  empresacamion.hasMany(transporte, { as: "transportes", foreignKey: "empresaCamionId"});
  modelo.belongsTo(marcascamion, { as: "marcasCamion", foreignKey: "marcasCamionId"});
  marcascamion.hasMany(modelo, { as: "modelos", foreignKey: "marcasCamionId"});
  comuna.belongsTo(provincia, { as: "provincium", foreignKey: "provinciaId"});
  provincia.hasMany(comuna, { as: "comunas", foreignKey: "provinciaId"});
  provincia.belongsTo(region, { as: "region", foreignKey: "regionId"});
  region.hasMany(provincia, { as: "provincia", foreignKey: "regionId"});
  usuariorol.belongsTo(rol, { as: "rol", foreignKey: "rolId"});
  rol.hasMany(usuariorol, { as: "usuariorols", foreignKey: "rolId"});
  transporte.belongsTo(tipocarga, { as: "tipoCarga", foreignKey: "tipoCargaId"});
  tipocarga.hasMany(transporte, { as: "transportes", foreignKey: "tipoCargaId"});
  transporte.belongsTo(tipotransporte, { as: "tipoTransporte", foreignKey: "tipoTransporteId"});
  tipotransporte.hasMany(transporte, { as: "transportes", foreignKey: "tipoTransporteId"});
  transporte.belongsTo(usuario, { as: "usuario", foreignKey: "usuarioId"});
  usuario.hasMany(transporte, { as: "transportes", foreignKey: "usuarioId"});
  usuariorol.belongsTo(usuario, { as: "usuario", foreignKey: "usuarioId"});
  usuario.hasMany(usuariorol, { as: "usuariorols", foreignKey: "usuarioId"});
  transporte.belongsTo(variedadcarga, { as: "variedadCarga", foreignKey: "variedadCargaId"});
  variedadcarga.hasMany(transporte, { as: "transportes", foreignKey: "variedadCargaId"});

  return {
    camion,
    camionero,
    carro,
    codigomop,
    comuna,
    direccion,
    empresa,
    empresacamion,
    marcascamion,
    modelo,
    provincia,
    region,
    rol,
    tipocarga,
    tipotransporte,
    transporte,
    usuario,
    usuariorol,
    variedadcarga,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
