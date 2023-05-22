import React, {useState} from 'react'
import {View, StyleSheet, Dimensions, Image, FlatList} from 'react-native'
import TrackPlayer, {Event, Track, useTrackPlayerEvents} from 'react-native-track-player'
import { playListData } from '../constants'
import SongInfo from '../components/SongsInfo'
import SongSlider from '../components/SongSlider'
import ControlCentre from '../components/ControlCenter'


const {width} = Dimensions.get('window')

const MusicPlayer = () => {

    const [track, setTrack] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
            switch (event.type) {
                case Event.PlaybackTrackChanged:
                    const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                    setTrack(playingTrack)
                    break;
            }
    })

    const renderArtWork = () => (
        <View style={styles.listArtWrapper}>
            <View style={styles.albumContainer}>
                {track?.artwork && (
                    <Image
                    style={styles.albumArtImage}
                    source={{uri:track?.artwork?.toString()}}
                    />
                )}
            </View>
        </View>
    )

    // Main View of the App
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal
                    data={playListData}
                    renderItem={renderArtWork}
                    keyExtractor={song => song.id.toString()}
                />

            <SongInfo track={track}/>
            <SongSlider/>
            <ControlCentre/>

            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#001d23'
    },
    listArtWrapper:{
        width:width,
        justifyContent:'center',
        alignItems:'center'
    },
    albumContainer:{
        width:300,
        height:300
    },
    albumArtImage:{
        height:'100%',
        borderRadius:4
    },


})

export default MusicPlayer;
