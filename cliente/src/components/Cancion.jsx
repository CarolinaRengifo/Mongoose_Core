import { useEffect } from "react";
import axios from "axios";
import {useState} from "react";
import style from "../css/cancion.module.css"

const Cancion = () => {
  const [canciones, setCanciones] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:8080/canciones") .then(res => setCanciones(res.data)).catch(err => console.error("Error al obtener canciones", err));
  }, []);

  const filteredCancion = canciones.filter(cancion => cancion.title.toLowerCase().includes(search.toLowerCase()) || cancion.artista.toLowerCase().includes(search.toLowerCase()) || cancion.genero.toLowerCase().includes(search.toLowerCase())
  );
    
  return (
    <div className={style.container}>
      <h1>All Songs</h1>
      <input
        type="text"
        placeholder="Search songs by name, artist, or genre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredCancion.map((cancion) => (
          <li key={cancion._id}>
            <a href="#">{cancion.title}</a> by {cancion.artista} ({cancion.genero})
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Cancion;