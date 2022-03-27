import React from "react";
const Song = ({ currentSong }) => {
  const changeBackground = () => {
    document.querySelector(
      "body"
    ).style.backgroundImage = `linear-gradient(to bottom,${currentSong.color[0]},${currentSong.color[1]})`;
    console.log(currentSong.color);
  };
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="" onChange={changeBackground} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
export default Song;
