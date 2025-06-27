import express from 'express';
import routes from './src/routes/movie.routes.js';
import { Sequelize } from 'sequelize';
import db from './src/config/database.js'
const sequelize = movies();
const app = express();
const port = 3000;
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('API movies.');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});

Sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
        return Sequelize.sync();
    })
    .then(() => {
        console.log('Tablas sincronizadas correctamente');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos o sincronizar tablas:', err);
    });
