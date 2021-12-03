import type { Sequelize } from "sequelize";
import { camion as _camion } from "./camion";
import type { camionAttributes, camionCreationAttributes } from "./camion";
import { camionero as _camionero } from "./camionero";
import type { camioneroAttributes, camioneroCreationAttributes } from "./camionero";
import { carro as _carro } from "./carro";
import type { carroAttributes, carroCreationAttributes } from "./carro";
import { codigomop as _codigomop } from "./codigomop";
import type { codigomopAttributes, codigomopCreationAttributes } from "./codigomop";
import { comuna as _comuna } from "./comuna";
import type { comunaAttributes, comunaCreationAttributes } from "./comuna";
import { direccion as _direccion } from "./direccion";
import type { direccionAttributes, direccionCreationAttributes } from "./direccion";
import { empresa as _empresa } from "./empresa";
import type { empresaAttributes, empresaCreationAttributes } from "./empresa";
import { empresacamion as _empresacamion } from "./empresacamion";
import type { empresacamionAttributes, empresacamionCreationAttributes } from "./empresacamion";
import { marcascamion as _marcascamion } from "./marcascamion";
import type { marcascamionAttributes, marcascamionCreationAttributes } from "./marcascamion";
import { modelo as _modelo } from "./modelo";
import type { modeloAttributes, modeloCreationAttributes } from "./modelo";
import { provincia as _provincia } from "./provincia";
import type { provinciaAttributes, provinciaCreationAttributes } from "./provincia";
import { region as _region } from "./region";
import type { regionAttributes, regionCreationAttributes } from "./region";
import { rol as _rol } from "./rol";
import type { rolAttributes, rolCreationAttributes } from "./rol";
import { tipocarga as _tipocarga } from "./tipocarga";
import type { tipocargaAttributes, tipocargaCreationAttributes } from "./tipocarga";
import { tipotransporte as _tipotransporte } from "./tipotransporte";
import type { tipotransporteAttributes, tipotransporteCreationAttributes } from "./tipotransporte";
import { transporte as _transporte } from "./transporte";
import type { transporteAttributes, transporteCreationAttributes } from "./transporte";
import { usuario as _usuario } from "./usuario";
import type { usuarioAttributes, usuarioCreationAttributes } from "./usuario";
import { usuariorol as _usuariorol } from "./usuariorol";
import type { usuariorolAttributes, usuariorolCreationAttributes } from "./usuariorol";
import { variedadcarga as _variedadcarga } from "./variedadcarga";
import type { variedadcargaAttributes, variedadcargaCreationAttributes } from "./variedadcarga";

export {
 _camion as camion,
 _camionero as camionero,
 _carro as carro,
 _codigomop as codigomop,
 _comuna as comuna,
 _direccion as direccion,
 _empresa as empresa,
 _empresacamion as empresacamion,
 _marcascamion as marcascamion,
 _modelo as modelo,
 _provincia as provincia,
 _region as region,
 _rol as rol,
 _tipocarga as tipocarga,
 _tipotransporte as tipotransporte,
 _transporte as transporte,
 _usuario as usuario,
 _usuariorol as usuariorol,
 _variedadcarga as variedadcarga,
};

export type {
  camionAttributes,
  camionCreationAttributes,
  camioneroAttributes,
  camioneroCreationAttributes,
  carroAttributes,
  carroCreationAttributes,
  codigomopAttributes,
  codigomopCreationAttributes,
  comunaAttributes,
  comunaCreationAttributes,
  direccionAttributes,
  direccionCreationAttributes,
  empresaAttributes,
  empresaCreationAttributes,
  empresacamionAttributes,
  empresacamionCreationAttributes,
  marcascamionAttributes,
  marcascamionCreationAttributes,
  modeloAttributes,
  modeloCreationAttributes,
  provinciaAttributes,
  provinciaCreationAttributes,
  regionAttributes,
  regionCreationAttributes,
  rolAttributes,
  rolCreationAttributes,
  tipocargaAttributes,
  tipocargaCreationAttributes,
  tipotransporteAttributes,
  tipotransporteCreationAttributes,
  transporteAttributes,
  transporteCreationAttributes,
  usuarioAttributes,
  usuarioCreationAttributes,
  usuariorolAttributes,
  usuariorolCreationAttributes,
  variedadcargaAttributes,
  variedadcargaCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const camion = _camion.initModel(sequelize);
  const camionero = _camionero.initModel(sequelize);
  const carro = _carro.initModel(sequelize);
  const codigomop = _codigomop.initModel(sequelize);
  const comuna = _comuna.initModel(sequelize);
  const direccion = _direccion.initModel(sequelize);
  const empresa = _empresa.initModel(sequelize);
  const empresacamion = _empresacamion.initModel(sequelize);
  const marcascamion = _marcascamion.initModel(sequelize);
  const modelo = _modelo.initModel(sequelize);
  const provincia = _provincia.initModel(sequelize);
  const region = _region.initModel(sequelize);
  const rol = _rol.initModel(sequelize);
  const tipocarga = _tipocarga.initModel(sequelize);
  const tipotransporte = _tipotransporte.initModel(sequelize);
  const transporte = _transporte.initModel(sequelize);
  const usuario = _usuario.initModel(sequelize);
  const usuariorol = _usuariorol.initModel(sequelize);
  const variedadcarga = _variedadcarga.initModel(sequelize);

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
    camion: camion,
    camionero: camionero,
    carro: carro,
    codigomop: codigomop,
    comuna: comuna,
    direccion: direccion,
    empresa: empresa,
    empresacamion: empresacamion,
    marcascamion: marcascamion,
    modelo: modelo,
    provincia: provincia,
    region: region,
    rol: rol,
    tipocarga: tipocarga,
    tipotransporte: tipotransporte,
    transporte: transporte,
    usuario: usuario,
    usuariorol: usuariorol,
    variedadcarga: variedadcarga,
  };
}
