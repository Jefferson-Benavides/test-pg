const express = require('express');
const app = express();
const Asociado = require('./models/asociado'); // Asegúrate de que el modelo esté definido adecuadamente
const sequelize = require('./db'); // Asegúrate de que la conexión a la base de datos esté configurada

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Ruta para obtener una lista de asociados
app.get('/asociados', async (req, res) => {
  try {
    const asociados = await Asociado.findAll();
    res.render('asociados', { asociados });
  } catch (error) {
    console.error('Error al consultar asociados:', error);
    res.status(500).send('Error al consultar asociados');
  }
});

// Ruta para agregar un nuevo asociado
app.post('/asociados', async (req, res) => {
  try {
    const { tipo_identificacion_asociado, numero_identificacion_asociado, nombres_asociado, apellidos_asociado, fecha_nacimiento_asociado } = req.body;
    await Asociado.create({
      tipo_identificacion_asociado,
      numero_identificacion_asociado,
      nombres_asociado,
      apellidos_asociado,
      fecha_nacimiento_asociado,
    });
    res.redirect('/asociados');
  } catch (error) {
    console.error('Error al agregar asociado:', error);
    res.status(500).send('Error al agregar asociado');
  }
});

// Ruta para eliminar un asociado
app.post('/asociados/:id/delete', async (req, res) => {
  try {
    const id = req.params.id;
    await Asociado.destroy({ where: { id } });
    res.redirect('/asociados');
  } catch (error) {
    console.error('Error al eliminar asociado:', error);
    res.status(500).send('Error al eliminar asociado');
  }
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
  });
});
