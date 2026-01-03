import { AllSongs } from "./components/AllSongs";
import { Routes, Route, HashRouter } from "react-router";
import { Playlists } from "./components/Playlists";
import { MusicPlayer } from "./components/MusicPlayer";
import { MusicProvider } from "./contexts/MusicContext";
import { Navbar } from "./components/NavBar";

function App() {

  return (
    <HashRouter>

      <MusicProvider>
        <div className="app">
          <Navbar />
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer />
            </div>
            <div className="content-section">
              <Routes>
                <Route path="/" element={<AllSongs />}  />
                <Route path="/playlists" element={<Playlists />}  />
              </Routes>
            </div>
          </main>
        </div>

      </MusicProvider>

    </HashRouter>
  )
}

export default App
