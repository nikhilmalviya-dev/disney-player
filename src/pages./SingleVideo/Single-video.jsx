import "./single.css";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useVideos } from "../../Context/Videos-Context";
import Sidebar from "../../Componant/SideBar/SideBar";
import Navbar from "../../Componant/Navbar/Navbar";
import VideoCard from "../../Componant/Video-Card/VideoCard";
import { useWatchlater } from "../../Context/Features-page/WatchLater-context";
import { useLikes } from "../../Context/Features-page/Likes-context";
import { usePlaylist } from "../../Context/Features-page/Playlist-context";
import PlaylistModel from "../../Componant/Playlsit-model/Playlist-Model";

const SingleVideo = () => {
  const { VideoId } = useParams();
  const { video, loader } = useVideos();

  const containerRef = useRef(null);
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    iframeContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [VideoId]);

  const { removeWatchVideo, WatchLaterVideos, getWatchLaterVideo } = useWatchlater();
  const { getLikedVideo, removeLikeVideo, LikeVideos } = useLikes();
  const { showModel, setShowModel } = usePlaylist();

  const playVideo = video.find((play) => play.id === VideoId);

  if (loader) {
    return (
      <main>
        <Navbar />
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </main>
    );
  }

  if (!playVideo) {
    return (
      <main>
        <Navbar />
        <div style={{ color: "#fff", textAlign: "center", padding: "4rem" }}>
          Video not found.
        </div>
      </main>
    );
  }

  const isLiked = LikeVideos.some((d) => d.id === playVideo.id);
  const isWatchLater = WatchLaterVideos.some((d) => d.id === playVideo.id);

  return (
    <main>
      <Navbar />
      <div className="single-video-container" ref={containerRef}>
        <aside>
          <Sidebar />
        </aside>

        <div className="iframe-container" ref={iframeContainerRef}>
          <iframe
            width="100%"
            src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>

          <h2 className="titleName">{playVideo.title}</h2>

          <div className="video-detail-container">
            <p>{playVideo.views} views &nbsp;·&nbsp; {playVideo.release}</p>
            <div className="single-video-detail font-18p">
              <i
                onClick={() => isLiked ? removeLikeVideo(playVideo.id) : getLikedVideo(playVideo)}
                style={isLiked ? { color: "#3b82f6" } : {}}
                className="fa fa-thumbs-up"
                aria-hidden="true"
                title={isLiked ? "Unlike" : "Like"}
              ></i>
              <i
                onClick={() => isWatchLater ? removeWatchVideo(playVideo.id) : getWatchLaterVideo(playVideo)}
                style={isWatchLater ? { color: "#f59e0b" } : {}}
                className="fas fa-clock watch-later-btn"
                title={isWatchLater ? "Remove from Watch Later" : "Watch Later"}
              ></i>
              <i
                onClick={() => setShowModel(!showModel)}
                className="fas fa-folder-plus"
                title="Add to Playlist"
              ></i>
            </div>
          </div>

          <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "0" }} />

          <section className="img-creator">
            <img src={playVideo.img} className="badge-img" alt={playVideo.creator} />
            <section>
              <h3>{playVideo.creator}</h3>
              <p className="description">
                {playVideo.description}
              </p>
            </section>
          </section>
        </div>

        <section className="suggestions-panel">
          <h3 className="Suggestions-heading">Suggestions</h3>
          {video.map((item) =>
            playVideo.genre === item.genre && item.id !== playVideo.id
              ? <VideoCard key={item.id} data={item} />
              : null
          )}
        </section>
      </div>

      {showModel && <PlaylistModel data={playVideo} />}
    </main>
  );
};

export default SingleVideo;
