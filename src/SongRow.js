import React, { useRef, useState, useEffect } from 'react';
import "./SongRow.css";
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

function SongRow({ track }) {
  const audioRef = useRef(null);
  const [songUrl, setSongUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchSongUrl = async () => {
      try {
        const response = await spotifyApi.getTrack(track.id);
        setSongUrl(response.preview_url);
      } catch (error) {
        console.error('Error fetching song URL:', error);
      }
    };

    fetchSongUrl();
  }, [track.id]);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="songRow">
      <img src={track.album.images[0].url} alt="" className="songRow__album" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
      <div className="songRow__controls">
        <audio ref={audioRef} src={songUrl} /> {/* Use the dynamically fetched songUrl */}
        <button onClick={isPlaying ? pauseMusic : playMusic}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
}

export default SongRow;
