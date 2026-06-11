import Sidebar from "../../Componant/SideBar/SideBar";
import Videos from "../../pages./Videos./Videos";
import GenreFilter from "../../Componant/genre-chips/GenreFilter";
import { useVideos } from "../../Context/Videos-Context";
import "./videos.css";
import Navbar from "../../Componant/Navbar/Navbar";

const VideoListing = () => {
  const { loader } = useVideos();

  return (
    <main>
      <Navbar />
      <section className="video-container">
        <aside>
          <Sidebar />
        </aside>
        <section className="page-right">
          <GenreFilter />
          <div className="All-videos">
            {loader && (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            )}
            <Videos />
          </div>
        </section>
      </section>
    </main>
  );
};
export default VideoListing;
