import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Decks from './components/Views/Decks';
import NewDeck from './components/Views/NewDeck';
import { Constants } from 'expo'

function AppStatusBar () { 
  return ( 
    <View style={{backgroundColor: "blue" ,height: Constants.statusBarHeight}}> 
    <StatusBar translucent backgroundColor={"blue"} /> 
    </View> 
  )}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar></AppStatusBar>
        <NewDeck></NewDeck>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;