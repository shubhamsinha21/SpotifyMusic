
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
      <Text>Testing is ok !</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
