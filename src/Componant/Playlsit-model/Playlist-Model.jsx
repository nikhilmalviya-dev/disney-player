import { usePlaylist } from "../../Context/Features-page/Playlist-context";

const PlaylistModel = ({ data }) => {
  const {
    createPlaylist,
    AddPlaylistVideo,
    playlist,
    showModel,
    setShowModel,
    modelInput,
    setModelInput,
  } = usePlaylist();

  const clickHandler = () => {
    createPlaylist({ modelInput });
    setModelInput("");
  };

  return (
    <div className="models-contain" onClick={() => setShowModel(false)}>
      <div className="model-container" onClick={(e) => e.stopPropagation()}>
        <i
          onClick={() => setShowModel(!showModel)}
          className="fa fa-times cross-icon"
          aria-hidden="true"
        ></i>
        <h4 style={{ marginBottom: "1rem", fontSize: "1rem", color: "rgba(255,255,255,0.85)" }}>
          Save to Playlist
        </h4>
        <section className="input-createBtn-section flex gap-1r" style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            onChange={(e) => setModelInput(e.target.value)}
            value={modelInput}
            placeholder="New playlist name..."
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "0.4rem",
              color: "#fff",
              padding: "0.4rem 0.6rem",
              fontSize: "0.9rem",
              outline: "none",
            }}
          />
          <button onClick={clickHandler} className="create-btn padding-4px">
            Create
          </button>
        </section>
        {playlist.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {playlist.map((ele) => (
              <label
                key={ele._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  cursor: "pointer",
                  padding: "0.45rem 0.5rem",
                  borderRadius: "0.4rem",
                  transition: "background 0.15s",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.9rem",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(168,85,247,0.15)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <input
                  type="checkbox"
                  onClick={() => {
                    AddPlaylistVideo(ele._id, data);
                    setShowModel(!showModel);
                  }}
                />
                {ele.modelInput}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistModel;
