import mongoose, { mongo } from "mongoose";

const cancionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "El título de la canción es obligatorio."],
        minlength: [6, "El título debe tener al menos 6 caracteres."],
        maxlength: [255, "El título no puede superar los 255 caracteres."],
    },
    artista: {
        type: String,
        required: [true, "El artista es obligatorio."],
        minlength: [10, "El nombre del artista debe tener al menos 10 caracteres."],
        maxlength: [255, "El nombre del artista no puede superar los 255 caracteres."],
    },
    anioLanzamiento: {
        type: Number,
        required: [true, "El año de lanzamiento es obligatorio."],
        validate: { validator: function (v) {
            return /^\d{4}$/.test(v);
        },
        message: "El año de lanzamiento debe tener exactamente 4 dígitos.",
        },
    },
    genero: {
        type: String,
        required: [true, "El género es obligatorio."],
    },
    },
    {
    timestamps: true,
    }
);

const cancion = mongoose.model("cancion", cancionSchema);

export default cancion;
