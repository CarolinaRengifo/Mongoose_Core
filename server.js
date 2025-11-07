import express from 'express';
import dbConnect from './config/mongoose.config.js';
import dotenv from 'dotenv';
import rutascanciones from './rutes/rutascanciones.js';

dotenv.config();

const app = express();
//Configuracion de Express
app.use(express.json());
//Configuracion de rutas
app.use("/canciones", rutascanciones);

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});