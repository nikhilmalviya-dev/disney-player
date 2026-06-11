import Sidebar from "../../Componant/SideBar/SideBar";
import "./playlist.css";
import Navbar from "../../Componant/Navbar/Navbar";
import { usePlaylist } from "../../Context/Features-page/Playlist-context";
import { Link  } from "react-router-dom";


const Playlist = () => {
  const { playlist, removePlaylist } = usePlaylist();

  return (
    <main>
      <Navbar />
      <div className="playlist-container">
        <aside>
          <Sidebar />
        </aside>
        <div className="playlist-contain page-right">
          {playlist.length !== 0 ? (
            <section className="playlist-video ">
              {playlist.map((item) => (
                <section key={item._id} className="playlist-video-contain flex-column justify-between text-align gap-8p">
                  <Link to={`/playlistVideo/${item._id}`}>
                    <h1 className="see-heading margin-top-8p">
                      See PlayList Videos
                    </h1>
                  </Link>
                  <div className="playlist-name flex justify-between margin-8p">
                    <h3>{item.modelInput}</h3>
                    <i
                      onClick={() => removePlaylist(item._id)}
                      className="fas fa-trash solid delet-icon"
                    ></i>
                  </div>
                </section>
              ))}
            </section>
          ) : (
            <h2 className="WatchLater-heading text-align margin-top-16p">
              Playlist is Empty
            </h2>
          )}
        </div>
      </div>
    </main>
  );
};
export default Playlist;
