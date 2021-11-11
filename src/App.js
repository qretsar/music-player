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
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
