const { Asociado } = require('./models/asociado'); // Reemplaza con el modelo real

const inicializarBaseDeDatos = async () => {
  try {
    // Inserta cinco entradas de ejemplo en la tabla de asociados
    await Asociado.bulkCreate([
      {
        tipo_identificacion_asociado: 'Cédula',
        numero_identificacion_asociado: 12345,
        nombres_asociado: 'Juan',
        apellidos_asociado: 'Pérez',
        fecha_nacimiento_asociado: '1990-01-01',
      },
      {
        tipo_identificacion_asociado: 'Pasaporte',
        numero_identificacion_asociado: 67890,
        nombres_asociado: 'Ana',
        apellidos_asociado: 'Gómez',
        fecha_nacimiento_asociado: '1995-05-15',
      },
      {
        tipo_identificacion_asociado: 'Cédula',
        numero_identificacion_asociado: 54321,
        nombres_asociado: 'Pedro',
        apellidos_asociado: 'Ramírez',
        fecha_nacimiento_asociado: '1985-11-30',
      },
      {
        tipo_identificacion_asociado: 'DNI',
        numero_identificacion_asociado: 98765,
        nombres_asociado: 'Laura',
        apellidos_asociado: 'Fernández',
        fecha_nacimiento_asociado: '1988-09-20',
      },
      {
        tipo_identificacion_asociado: 'Cédula',
        numero_identificacion_asociado: 11111,
        nombres_asociado: 'Miguel',
        apellidos_asociado: 'López',
        fecha_nacimiento_asociado: '1992-03-10',
      },
    ]);

    console.log('Base de datos inicializada con 5 entradas de asociados.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

inicializarBaseDeDatos();
