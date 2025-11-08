import { useState } from "react";
import axios from "axios";
import style from "../css/addcancion.module.css"

const Addcancion = () => {
  const [cancion, setCancion] = useState({
    titulo: "",
    artista: "",
    genero: "",
    anioLanzamiento: "",
  });

  const handleChange = (e) => {
    setCancion({ ...cancion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/canciones", cancion);
      alert("Canción agregada correctamente 🎵");
      setCancion({ title: "", artista: "", genero: "", anioLanzamiento: "" });
    } catch (error) {
      console.error("Error al agregar canción:", error);
      alert("Error al agregar canción");
    }
  };

  return (
    <div className={style.container}>
      <h1>Nueva Canción</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="title"
          value={cancion.title || ""}
          onChange={handleChange}
        />
        <input
          name="artista"
          placeholder="artista"
          value={cancion.artista || ""}
          onChange={handleChange}
        />
        <input
          name="anioLanzamiento"
          placeholder="Año de Lanzamiento"
          value={cancion.anioLanzamiento || ""}
          onChange={handleChange}
        />
        <input
          name="genero"
          placeholder="Género"
          value={cancion.genero || ""}
          onChange={handleChange}
        />
        <button type="submit">Agregar Canción</button>
      </form>
    </div>
  );
};

export default Addcancion;