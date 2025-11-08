import { useState, useEffect } from "react";
import axios from "axios";
import style from "../css/playlist.module.css"

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]); // ✅ useState importado correctamente

  useEffect(() => {
    const getDataPlaylist = async () => {
      try {
        const response = await axios.get("http://localhost:8080/playlist");
        setPlaylist(response.data);
      } catch (error) {
        console.error("Error al obtener playlist", error);
      }
    };

    getDataPlaylist();
  }, []);

  return (
    <div clasname={style.container}>
      <h2 className={style.title}>Playlists</h2>
      <ul>
        {playlist.map((pl) => (
          <li key={pl._id}>
            <strong>{pl.nombre}</strong>
            {pl.canciones && pl.canciones.length > 0 ? (
              <ul>
                {pl.canciones.map((c, i) => (
                  <li key={i}>
                    {c.titulo} - {c.artista} ({c.duracion})
                  </li>
                ))}
              </ul>
            ) : (
              <p>Sin canciones</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;