import Sidebar from "../../Componant/SideBar/SideBar";
import "./watchLater.css";
import Navbar from "../../Componant/Navbar/Navbar";
import { useWatchlater } from "../../Context/Features-page/WatchLater-context";
import VideoCard from "../../Componant/Video-Card/VideoCard";

const WatchLater = () => {
  const { WatchLaterVideos, removeWatchVideo } = useWatchlater();

  return (
    <main>
      <Navbar />
      <div className="WatchLater-container gap-5p">
        <section>
          <Sidebar />
        </section>
        <div className="page-right">
          {WatchLaterVideos.length !== 0 ? (
            <section>
              <h2 className="WatchLater-heading">Watch Later</h2>
              <div className="WatchLater-video  gap-8p margin-top-32p">
                {WatchLaterVideos.map((watchVideo) => (
                  <div key={watchVideo.id} className="positon-relative">
                    <VideoCard data={watchVideo} />
                    <i
                      onClick={() => removeWatchVideo(watchVideo.id)}
                      className="fas fa-trash solid  trash-icon-play font-18p"
                    ></i>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <h2 className="WatchLater-heading text-align margin-top-16p">
              Watch Later is Empty
            </h2>
          )}
        </div>
      </div>
    </main>
  );
};
export default WatchLater;
