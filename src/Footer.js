import React, { useState } from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

import songFile from "./music/The Nights.mp3"; // Import your song file

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(new Audio(songFile));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>THE NIGHTS</h4>
          <p>Avicii</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline
          fontSize="large"
          className="footer__icon"
          onClick={togglePlay}
        />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
      {/* Audio Player */}
      <audio ref={audioRef} src={songFile} />
    </div>
  );
}

export default Footer;
