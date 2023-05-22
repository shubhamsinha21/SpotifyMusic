import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player'


const SongSlider = () => {
    
    const {position, duration} = useProgress()

  return (
   <View>
        <Slider
            value={position}
            minimumValue={0}
            maximumValue={duration}
            thumbTintColor='#FFFFFF'
            maximumTrackTintColor='#FFFFFF'
            style={styles.sliderContainer}
        />
        <View style={styles.timContainer}>
          <Text style={styles.time}> 
                {new Date(position*1000).toISOString().substring
                (15,9)}
          </Text>
          <Text style={styles.time}> 
                {new Date((duration-position)*1000).toISOString().substring
                (15,9)}
          </Text>
        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer:{

    },
    timContainer:{

    },
    time:{

    }
})

export default SongSlider;
