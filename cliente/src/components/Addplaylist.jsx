import { useState, useEffect } from "react";
import axios from "axios";
import style from "../css/addplaylist.module.css"

const Addplaylist = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [nombre, setNombre] = useState("");

  // ✅ Obtener canciones al cargar el componente
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("http://localhost:8080/canciones");
        setSongs(res.data);
      } catch (error) {
        console.error("Error al obtener canciones:", error);
        alert("No se pudieron cargar las canciones 😞");
      }
    };
    fetchSongs();
  }, []);

  // ✅ Manejo del checkbox (selección o deselección)
  const handleCheckbox = (id) => {
    setSelectedSongs((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  // ✅ Envío de la nueva playlist al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      alert("Por favor ingresa un nombre para la playlist 🎶");
      return;
    }

    if (selectedSongs.length === 0) {
      alert("Debes seleccionar al menos una canción 🎧");
      return;
    }

    try {
      await axios.post("http://localhost:8080/playlist", {
        nombre,
        canciones: selectedSongs,
      });
      alert("¡Playlist creada con éxito! 🎉");
      setNombre("");
      setSelectedSongs([]);
    } catch (error) {
      console.error("Error al crear playlist:", error);
      alert("Error al crear la playlist 😞");
    }
    console.log({nombre,canciones: selectedSongs,
});
  };


  return (
    <div className={style.container}>
      <h1>Crear Nueva Playlist</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la Playlist"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <h2>Seleccionar Canciones</h2>
        {songs.length > 0 ? (
          songs.map((s) => (
            <div key={s._id}>
              <input
                type="checkbox"
                id={s._id}
                checked={selectedSongs.includes(s._id)}
                onChange={() => handleCheckbox(s._id)}
              />
              <label htmlFor={s._id}>{s.title}</label>
            </div>
          ))
        ) : (
          <p>No hay canciones disponibles 😢</p>
        )}

        <button type="submit">Crear Playlist</button>
      </form>
    </div>
  );
};

export default Addplaylist;