import { Song } from "../models/Song"
import { Playlist } from "./Playlist";

interface IPlaylistsProps {
    songPlaylist: Song[];
}


export const Playlists = (props: IPlaylistsProps) => {
    return(
        <div>
            {props.songPlaylist.map((song, index) => {
                return <Playlist key={index} song={song}/>
            })}
        </div>
    )
}