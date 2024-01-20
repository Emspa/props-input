import { Song } from "../models/Song"
import "./Playlist.css"

interface IPlaylistProps {
    song: Song;
}

export const Playlist = (props: IPlaylistProps) => {
    return(
        <div className="my-songs">
            <h3 className="song">{props.song.name}</h3>
            <p className="artist">{props.song.artist}</p>
        </div>
    )
}