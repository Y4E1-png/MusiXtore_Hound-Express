import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongCard from "../SongCard";
import { fetchSongs } from "../../redux/slices/songsSlice";
import { LibraryContainer, LibraryTitle, LibraryGrid, LoadingStatus } from './styles';


const SongsList = ({ query = "" }) => {
  const dispatch = useDispatch()
  const {items, status, error} = useSelector((state) => state.songs);
  const searchTerm = query.trim().toLowerCase();
  const visibleSongs = items.filter((song) =>
    [song.title, song.artist, song.album].some((field) =>
      (field ?? "").toLowerCase().includes(searchTerm)
    )
  );
  
  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch])

  if (status === "loading") {
    return (
        <LoadingStatus role="status">Loading songs…</LoadingStatus>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>
  }

  return (
    <LibraryContainer>
      <LibraryTitle>Available Songs</LibraryTitle>
      {searchTerm && visibleSongs.length === 0 && (
        <p role="status">No songs match your search.</p>
      )}

      <LibraryGrid>
        {visibleSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
          />
        ))}

      </LibraryGrid>
    </LibraryContainer>
  );
}


export default SongsList;
