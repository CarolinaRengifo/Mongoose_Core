import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rutascanciones from './rutes/rutascanciones.js';
import rutaplaylist from './rutes/rutaplaylist.js';
import dbConnect from './config/mongoose.config.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/canciones", rutascanciones);
app.use("/playlist", rutaplaylist);

const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));