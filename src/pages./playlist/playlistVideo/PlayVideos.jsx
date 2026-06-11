import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../../Context/Features-page/Playlist-context";
import Navbar from "../../../Componant/Navbar/Navbar";
import Sidebar from "../../../Componant/SideBar/SideBar";
import VideoCard from "../../../Componant/Video-Card/VideoCard";

const PlaylistVideo = () => {
  const { playlistId } = useParams();
  const { playlistVideo, getPlaylistVideo, removePlaylistVideo } =
    usePlaylist();

  let getPlaylist = { videos: [] };

  useEffect(() => {
    getPlaylistVideo();
  }, []);

  if (playlistVideo !== undefined) {
    getPlaylist = playlistVideo.find((item) => item._id === playlistId);
  }

  const deleteFunc = (playlistId, videoId) => {
    removePlaylistVideo(playlistId, videoId);
    getPlaylistVideo();
  };

  return (
    <main>
      <Navbar />
      <div className="playlist-container">
        <aside>
          <Sidebar />
        </aside>
        {getPlaylist !== undefined ? (
          <section className="playlist-video page-right flex margin-top-8p">
            {getPlaylist.videos.map((item) => (
              <section key={item.id} className="positon-relative">
                <VideoCard data={item} />
                <i
                  onClick={() => deleteFunc(getPlaylist._id, item.id)}
                  className="fas fa-trash solid trash-icon-play font-18p"
                ></i>
              </section>
            ))}
          </section>
        ) : (
          <h1 className="text-align">There is no videos</h1>
        )}
      </div>
    </main>
  );
};
export default PlaylistVideo;
