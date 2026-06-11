import "./sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaFolder,
  FaFilm,
  FaHeart,
  FaHistory,
} from "react-icons/fa";

const Sidebar = () => {
  const sidebarPages = [
    { page: "Home", icon: <FaHome />, link: "/" },
    { page: "Explore", icon: <FaCompass />, link: "/videoListing" },
    { page: "Playlist", icon: <FaFolder />, link: "/playlist" },
    { page: "Watch Later", icon: <FaFilm />, link: "/watchLater" },
    { page: "Liked Videos", icon: <FaHeart />, link: "/likes" },
    { page: "History", icon: <FaHistory />, link: "/history" },
  ];

  return (
    <div className="sidebar-container padding-22px">
      <aside className="lib-sidebar">
        <ul className="icon-list">
          {sidebarPages.map(({ page, icon, link }) => (
            <NavLink
              key={link}
              to={link}
              end={link === "/"}
              className={({ isActive }) =>
                isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"
              }
            >
              <li className="sidebar-item">
                <i className="sidebar-icon">{icon}</i>
                <span>{page}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
