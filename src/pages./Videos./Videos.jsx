import { useVideos } from "../../Context/Videos-Context";
import { useFilter } from "../../Context/Filter-context";
import { Link } from "react-router-dom";
import "./videos.css";
import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { useHistory } from "../../Context/Features-page/History-context";
import { usePlaylist } from "../../Context/Features-page/Playlist-context";
import { useWatchlater } from "../../Context/Features-page/WatchLater-context";
import PlaylistModel from "../../Componant/Playlsit-model/Playlist-Model";

const Videos = ({ data }) => {
  const { video } = useVideos();
  const { getHistoryVideo } = useHistory();

  const {
    VideoState: { videosFilter, showIcon, bySearch },
    VideoDispatch,
  } = useFilter();

  const { showModel, setShowModel, showShare, setShowShare } = usePlaylist();
  const { WatchLaterVideos, getWatchLaterVideo, removeWatchVideo } =
    useWatchlater();

  let filteredArray = video.filter((item) => item.genre === videosFilter);

  if (videosFilter === "ALL") {
    filteredArray = video;
  }
  if (bySearch) {
    filteredArray = video.filter((item) =>
      item.title.toLowerCase().includes(bySearch.toLowerCase())
    );
  }

  if (data !== undefined) {
    filteredArray = [data];
  }

  const [playlistVideoArry, setPlaylistVideoArray] = useState();

  return (
    <main>
      <div className="videolist-contain flex gap-10px flex-wrap positon-relative">
        {
          filteredArray.length === 0 ? 
          <h1 className="no-found  margin-top-16p">No videos found. Search for something else!</h1> :
          filteredArray.map((item) => (
          <section key={item.id} className="videos-detail padding-4px gap-8p flex-column positon-relative">
            <Link to={`/singleVideo/${item.id}`}>
              <section onClick={() => getHistoryVideo(item)}>
                <div>
                  <img
                    className="video-img"
                    src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                    alt="vido"
                  />
                </div>
              </section>
            </Link>
            <section className="about-video  positon-relative flex justify-between">
              <div className="badge-title flex gap-10px">
                <img src={item.img} className="badge-img" alt="img" />

                <section className="video-detail">
                  <h4>{item.title}</h4>
                  <p>{item.creator}</p>
                  <p>
                    {item.views} views . <span>{item.release}</span>
                  </p>
                </section>
              </div>

              <section>
                <i
                  onClick={() => {
                    return (
                      VideoDispatch({ type: "SHOW_ICON", payload: item }),
                      setShowShare(showShare ? false : true)
                    );
                  }}
                >
                  <FaEllipsisV />
                </i>
              </section>
              {item.id === showIcon && showShare ? (
                  <div
                    className="showIcon"
                    onClick={() => setShowShare(!showShare)}
                  >
                    <div className="showIcon-contain flex-column gap-8p margin-8p">
                      {WatchLaterVideos.some((data) => data.id === item.id) ? (
                        <i
                          onClick={() => {
                            return (
                              removeWatchVideo(item.id),
                              setShowShare(!showShare)
                            );
                          }}
                          style={{ color: "black" }}
                          className="fas fa-clock watch-later-btn hoverText"
                        >
                          Remove from Watch Later
                        </i>
                      ) : (
                        <i
                          onClick={() => {
                            return (
                              getWatchLaterVideo(item), setShowShare(!showShare)
                            );
                          }}
                          className="fas fa-clock watch-later-btn"
                        >
                          Save to Watch Later
                        </i>
                      )}
                      <i
                        onClick={() => {
                          return (
                            setShowModel(!showModel),
                            setPlaylistVideoArray(item),
                            setShowShare(!showShare)
                          );
                        }}
                        className="fas fa-folder-plus"
                      >
                        Add to Playlist
                      </i>
                    </div>
                  </div>
              ) : (
                ""
              )}
            </section>
          </section>
        ))}
        {showModel && <PlaylistModel data={playlistVideoArry} />}
      </div>
    </main>
  );
};
export default Videos;
