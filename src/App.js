import "./App.css";
import "./styless/utility.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages./Home";
import VideoListing from "./pages./Video-list/Video-listing";
import Videos from "./pages./Videos./Videos";
import SingleVideo from "./pages./SingleVideo/Single-video";
import NotFound from "./pages./404-page/not-found-page";
import Likes from "./pages./Likes-page/Likes";
import WatchLater from "./pages./watch-later/Watch-later";
import History from "./pages./History-page/History";
import RequireAuth from "./PrivateAuth/RequireAuth";
import Login from "./pages./Authentication/Login/login";
import Signup from "./pages./Authentication/Signup/SignUp";
import Logout from "./pages./Authentication/Logout-page/Logout";
import Playlist from "./pages./playlist/Playlist";
import PlaylistVideo from "./pages./playlist/playlistVideo/PlayVideos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videoListing" element={<VideoListing />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/singleVideo/:VideoId" element={<SingleVideo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/playlistVideo/:playlistId" element={<PlaylistVideo />} />


        <Route
          path="/likes"
          element={
            <RequireAuth>
              <Likes />
            </RequireAuth>
          }
        />
        <Route
          path="/watchLater"
          element={
            <RequireAuth>
              <WatchLater />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />
         <Route
          path="/playlist"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer className="toast-container" 
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
