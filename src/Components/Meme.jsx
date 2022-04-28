import React from "react";
import memeData from "../memeData.js";

function Meme() {
  const [memeImg, setMemeImage] = React.useState("");

  function handleClick() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button onClick={handleClick} className="form--btn">
          Get a new image
        </button>
      </div>
      <img src={memeImg} className="meme--img" />
    </main>
  );
}

export default Meme;
