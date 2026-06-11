import "./home.css";
import Genre from "../Componant/Genre/Genre";
import { Link } from "react-router-dom";
import Navbar from "../Componant/Navbar/Navbar";

const HomePage = () => {

  return (
    <main>
      <Navbar />
      <section className="home-container flex-center flex-column gap-2r">
        <img
          className="brand-logo-home"
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt="Disney+ Hotstar"
        />
        <p className="home-tagline">Stream your favourite music videos</p>
        <section className="genre-sec">
          <Genre />
        </section>
        <Link to="/videoListing">
          <button className="exploreBtn font-18p"> EXPLORE VIDEOS </button>
        </Link>
      </section>
    </main>
  );
};
export default HomePage;
