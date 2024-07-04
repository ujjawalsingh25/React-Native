
import TrackPlayer, {Event, RepeatMode} from "react-native-track-player";

import { playListData } from "./src/Constants";

export async function setupPlayer(){
    let isSetup = false;
    try {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        // warnings about its deprecation. Deprecated means that while the function still works, it's advised not to use it in new code because it may be removed in future versions of the library
        if (currentTrack !== null) {
            isSetup = true;
        }
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true
    } finally{
        return isSetup;
    }
}  

export async function addTrack(){
    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService (){
    
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })

}