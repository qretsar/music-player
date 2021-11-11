import React, { useState } from "react";

import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Utility
import data from "./util";
function App() {
  //State
  //when data() runs it returns all array of objects from util.js
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
