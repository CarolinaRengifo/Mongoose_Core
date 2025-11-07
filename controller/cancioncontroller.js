import cancion from "./../modelos/cancion.js";


const crearcancion = async (req, res) => {
    try {
        const nuevacancion = await cancion.create(req.body);
        res.status(201).json(nuevacancion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenercanciones = async (req, res) => {
    try {
        const canciones = await cancion.find();
        res.json(canciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenercancionPorId = async (req, res) => {
    try {
        const cancionid = await cancion.findById(req.params.id);
        if (!cancionid) {
            res.status(404).json({ error: "Canción no encontrada." });
        } else {
            res.json(cancionid);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarcancion = async (req, res) => {
    try {
        const cancionactualizada = await cancion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cancionactualizada) {
            res.status(404).json({ error: "Canción no encontrada." });
        } else {
            res.json(cancionactualizada);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarcancion = async (req, res) => {
    try {
        const cancioneliminar = await cancion.findByIdAndDelete(req.params.id);
        if (!cancioneliminar) {
            res.status(404).json({ error: "Canción no encontrada." });
        } else {
            res.json({ message: "Canción eliminada correctamente." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { crearcancion, obtenercanciones, obtenercancionPorId, actualizarcancion, eliminarcancion };