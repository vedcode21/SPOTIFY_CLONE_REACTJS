import React, { useEffect } from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await spotify.getPlaylist('discover_weekly_id');
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      } catch (error) {
        console.error('Error fetching Discover Weekly:', error);
      }
    };

    fetchData();
  }, [spotify, dispatch]); // Dependencies for useEffect


  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="Playlist" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name || "Discover Weekly"}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
