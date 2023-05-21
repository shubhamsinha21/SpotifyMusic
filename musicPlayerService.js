import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player'
import { playListData } from './src/constants'

export async function setupPlayer(){
    //setting up of a player takes quite long time and this may crash the app also
    //so, we will wrap it into try-catch block
    //await TrackPlayer.setupPlayer()-> this may crash the app, so we do create flag & try-catch block

    let issetup = false
    try {
        //here, assuming player ready and ready to get track
        await TrackPlayer.getCurrentTrack()
        issetup =  true
    } catch (error) {
        // if the track is not ready for the first time, then we come to catch block
        await TrackPlayer.setupPlayer()
        issetup =  true
    } finally{
      return issetup
    }
}

    //loading the data brought into the player
export async function addTrack() {
    await TrackPlayer.add(playListData)
    //playListdata is data supported by the playlist Track[]
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
    // entire playlist keep on repeating
}

export async function playbackService(){
    // provides ability to play, pause, etc and track player gives all this feature
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