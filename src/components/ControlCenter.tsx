import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../../musicPlayerService'

const ControlCentre = () => {

    const playbackState = usePlaybackState()
    // next button
    const skipToNext =async () => {
        await TrackPlayer.skipToNext()
    }
    //previous button
    const skipToPrevious =async () => {
        await TrackPlayer.skipToPrevious()
    }
    // toggle button
    const togglePlayback = async (playback:State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack()

        if (currentTrack !== null){
            if (playback === State.Paused || playback === State.Playing){
                await TrackPlayer.play()
            }
            else{
                await TrackPlayer.pause()
            }
        }
    }
    return(
        <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name='skip-previous' size={40} />
        </Pressable>
        <Pressable onPress={ () => togglePlayback(playbackState)}>
            <Icon style={styles.icon}
             name = {playbackState === State.Playing ? 'pause' : 'play-arrow'}
             size={70} />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name='skip-next' size={40} />
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    icon:{

    }
})
export default ControlCentre;