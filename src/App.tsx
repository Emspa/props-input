/** @format */

import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css"; 
import { Playlist } from "./components/Playlist";
import { Playlists } from "./components/Playlists";
import { Song } from "./models/Song";

function App() {
  const playlist: Song[] = [
    new Song("Lovin on me", "Jack Harlow"),
    new Song("Cruel summer", "Taylor Swift"),
    new Song("I Wanna Be Yours", "Arctic Monkeys"),
  ];

  const [newPlaylist, setNewPlaylist] = useState<Song[]>(playlist);
  const [addSong, setAddSong] = useState<Song>(new Song("", ""));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddSong({ ...addSong, [e.target.name]: e.target.value });
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    if (addSong.name && addSong.artist) {

      setNewPlaylist([...newPlaylist, addSong]);

      setAddSong(new Song("", ""));
    }
  };

  return (
    <div className="App">
      <h2 className="playlist-title">My playlist</h2>
      <form className="input-playlist" onSubmit={handleSave}>
        <input
          type="text"
          onChange={handleChange}
          value={addSong.name}
          name="name"
          placeholder="Song name"
        />
        <input
          type="text"
          onChange={handleChange}
          value={addSong.artist}
          name="artist"
          placeholder="Artist"
        />
        <button className="btn-add-song">Add to playlist</button>
      </form>

      <Playlists songPlaylist={newPlaylist} />
    </div>
  );
}

export default App;
