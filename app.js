const express = require('express');
const sequelize = require('./models/index');
const Asociado = require('./models/asociado');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', async (req, res) => {
  try {
    const asociados = await Asociado.findAll();
    res.render('index', { asociados });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
