import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getDecks, setInitialDeck, addDeck } from '../../helpers/storage';
import Card from './Card';
import { Input, Button } from 'react-native-elements';

class NewDeck extends Component {

  state={
    title: ''
  }

  onSubmit(){
    const { title } = this.state;
    addDeck(title).then(result => {
      console.log(result);
      alert("New deck created");
      this.setState({
        title: ''
      }).catch(err => {
        console.log(err);
        alert("Ops! Something went wrong");
      });
    });
  }

  render() {
    return (
      <View style={styles.newDeck}>
        <Text>Create a New Deck!!</Text>
        <Input value={this.state.title} onChangeText={(title) => this.setState({title})} style={styles.inputStyle}></Input>
        <Button title="Create Deck!" onPress={() => this.onSubmit()}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "red",
    height: 50,
    width: "50%"
  },
  newDeck: {
    position: "absolute",
    top: "40%",
    left: "35%"
  }
});


export default NewDeck;
