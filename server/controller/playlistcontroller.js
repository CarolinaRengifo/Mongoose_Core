import playlist from "../model/playlist.js";
import cancion from "../model/cancion.js";


const crearplaylist = async (req, res) => {
    try {
        const nuevaplaylist = await playlist.create(req.body);
        res.status(201).json(nuevaplaylist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerplaylist = async (req, res) => {
  try {
    const mostrarplaylist = await playlist.find().populate("canciones");
    res.json(mostrarplaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export { crearplaylist, obtenerplaylist };