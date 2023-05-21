
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {


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
  alignItems:'center'
 }
});

export default App;
