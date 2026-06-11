import Sidebar from "../../Componant/SideBar/SideBar";
import "./likes.css";
import Navbar from "../../Componant/Navbar/Navbar";
import { useLikes } from "../../Context/Features-page/Likes-context";
import VideoCard from "../../Componant/Video-Card/VideoCard";

const Likes = () => {
  const { LikeVideos, removeLikeVideo } = useLikes();
  return (
    <main>
      <Navbar />
      <div className="Likes-container gap-5p">
        <section>
          <Sidebar />
        </section>
        <div className="page-right">
          {LikeVideos.length !== 0 ? (
            <div>
              <h2 className="likes-heading">Likes Video</h2>
              <section className="likes-video-contain gap-8p margin-top-32p">
                {LikeVideos.map((likeVideo) => (
                  <section key={likeVideo.id} className="positon-relative">
                    <VideoCard data={likeVideo} />
                    <i
                      onClick={() => removeLikeVideo(likeVideo.id)}
                      className="fas fa-trash solid  trash-icon-play font-18p"
                    ></i>
                  </section>
                ))}
              </section>
            </div>
          ) : (
            <h2 className="likes-heading text-align margin-top-16p">
              Likes is Empty
            </h2>
          )}
        </div>
      </div>
    </main>
  );
};
export default Likes;
