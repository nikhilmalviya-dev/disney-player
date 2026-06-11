import { useGenre } from "../../Context/GenreContext";
import "./genre.css";
import { useFilter } from "../../Context/Filter-context";
import { Link } from "react-router-dom";

const Genre = () => {
  const { genre } = useGenre();
  const { VideoDispatch } = useFilter();

  return (
    <div className="genre-container">
      {genre.map((item) => (
        <div key={item.genre} className="genre-contain">
          <Link to="/videoListing">
            <div
              className="genre-card"
              onClick={() =>
                VideoDispatch({ type: "FILTER_BY_GENRE", payload: item.genre })
              }
            >
              <img className="cateImg" src={item.categoryImg} alt={item.genre} />
              <span className="genre-label">{item.genre}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Genre;
