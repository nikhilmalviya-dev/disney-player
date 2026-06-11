import "./genreFilter.css";
import { useFilter } from "../../Context/Filter-context";

const GenreFilter = () => {
  const { VideoState, VideoDispatch } = useFilter();
  const filters = ["ALL", "LOFI", "ROMANTIC", "SAD", "EVERGREEN", "POP"];
  return (
    <div className="genreChips-container">
      <ul className="genre-list flex">
        {filters.map((item) => (
          <div key={item}>
            <button
              className={VideoState.videosFilter === item ? "genreFocus padding-8p margin-8p" : "genre-btn padding-8p margin-8p"}
              onClick={() =>
                VideoDispatch({ type: "FILTER_BY_GENRE", payload: item })
              }
            >
              {item}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GenreFilter;
