import Reac, {PropsWithChildren} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Track } from 'react-native-track-player'

type SongInfoProps = PropsWithChildren <{
    track : Track | undefined | null
}>

const SongInfo = ({track}:SongInfoProps) => {
  return (
   <View style={styles.container}>
        <View>
            <Text style={styles.name}>
                {track?.title}
            </Text>
            <Text style={styles.artist}>
                {track?.artist}.{track?.album}
            </Text>
            
        </View>
   </View>
  )
}


const styles = StyleSheet.create({
    container:{

    },
    name:{

    },
    artist:{
        
    }
})
export default SongInfo;