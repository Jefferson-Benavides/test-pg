const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Asociado = sequelize.define('Asociado', {
  tipo_identificacion_asociado: DataTypes.STRING,
  numero_identificacion_asociado: DataTypes.INTEGER,
  nombres_asociado: DataTypes.STRING,
  apellidos_asociado: DataTypes.STRING,
  fecha_nacimiento_asociado: DataTypes.DATE,
  // Define otras columnas aquí
});

module.exports = Asociado;
