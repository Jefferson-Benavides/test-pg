const express = require('express');
const app = express();
const Asociado = require('./models/asociado');
const sequelize = require('./db');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Ruta para obtener una lista de asociados
app.get('/asociados', async (req, res) => {
  const asociados = await Asociado.findAll();
  res.render('asociados', { asociados });
});

// Ruta para agregar un nuevo asociado
app.post('/asociados', async (req, res) => {
  const { tipo_identificacion_asociado, numero_identificacion_asociado, nombres_asociado, apellidos_asociado, fecha_nacimiento_asociado } = req.body;
  await Asociado.create({ tipo_identificacion_asociado, numero_identificacion_asociado, nombres_asociado, apellidos_asociado, fecha_nacimiento_asociado });
  res.redirect('/asociados');
});

// Ruta para eliminar un asociado
app.post('/asociados/:id/delete', async (req, res) => {
  const id = req.params.id;
  await Asociado.destroy({ where: { id } });
  res.redirect('/asociados');
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
  });
});
