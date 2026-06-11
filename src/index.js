import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Context/Filter-context";
import { GenreProvider } from "./Context/GenreContext";
import { VideosProvider } from "./Context/Videos-Context";
import { AuthProvider } from "./Context/Auth-context";
import { LikesProvider } from "./Context/Features-page/Likes-context";
import { WatchlaterProvider } from "./Context/Features-page/WatchLater-context";
import { HistoryProvider } from "./Context/Features-page/History-context";
import {PlaylistProvider} from "./Context/Features-page/Playlist-context";

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <GenreProvider>
          <VideosProvider>
            <AuthProvider>
              <LikesProvider>
                <WatchlaterProvider>
                  <HistoryProvider>
                  <PlaylistProvider>
                    <App />
                    </PlaylistProvider>
                  </HistoryProvider>
                </WatchlaterProvider>
              </LikesProvider>
            </AuthProvider>
          </VideosProvider>
        </GenreProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
