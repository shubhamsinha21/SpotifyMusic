import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { setupPlayer,addTrack } from '../musicPlayerService';
import MusicPlayer from './screens/MusicPlayer';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

      async function setUp(){
      let isSetup = await setupPlayer()
    
      if(isSetup){
        await addTrack()
      }
      setIsPlayerReady(isSetup)
      }

      useEffect(()=> {
        setUp()
      }, [])

      if(!isPlayerReady){
        return (
          <SafeAreaView>
            <ActivityIndicator/>
          </SafeAreaView>
        )
      }
  return (

      <View style={styles.container}>
      <StatusBar backgroundColor={'#001d23'}/>
      <MusicPlayer/>
      </View>

  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  alignItems:'center'
 }
});

export default App;
