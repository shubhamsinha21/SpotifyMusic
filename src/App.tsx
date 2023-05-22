import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { setupPlayer,addTrack } from '../musicPlayerService';

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
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.container}>
      <Text>Testing is ok !</Text>
      <Text>Testing is ok !</Text>
      <Text>Testing is ok !</Text>
      <Text>Testing is ok !</Text>
      <Text>Testing is ok !</Text>
      <Text>Testing is ok !</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  alignItems:'center'
 }
});

export default App;
