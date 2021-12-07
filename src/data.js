import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Lane",
      cover:
        "https://images.genius.com/9595f4f61dbd1a2822d273f604ee37f8.1000x1000x1.jpg",
      artist: "Dado Polumenta",
      audio: "https://pogrebnicentarkrsic.com/dp/Dado-Lane.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Rani me",
      cover:
        "https://images.genius.com/1dc70661aa27d7e2ba8a9d744ccc2756.1000x1000x1.png",
      artist: "Dado Polumenta",
      audio: "https://pogrebnicentarkrsic.com/dp/DadoPolumenta-Ranime.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default chillHop;
