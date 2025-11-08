import { Link } from "react-router-dom";
import style from "../css/header.module.css"

const Header = () => {
  return (
    <nav className={style.header}>
      <Link to="/">Songs</Link>
      <Link to="/playlists">Playlists</Link>
      <Link to="/add-song">Add Song</Link>
      <Link to="/add-playlist">Add Playlist</Link>
    </nav>
  );
};

export default Header;