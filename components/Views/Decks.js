import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getDecks, setInitialDeck } from '../../helpers/storage';
import Card from './Card';

class Decks extends Component {

  state = {
    decks: []
  }

  componentDidMount(){

    setInitialDeck().then(result => {
      this.setState({
        decks: result
      })
    });
  }

  render() {

    const { decks } = this.state;

    return (
      <View>
        <Text style={styles.title}>Decks</Text>
        <FlatList data={decks} renderItem={({ item }) => (<Card item={item}/>)} 
        keyStractor={item => item.id.toString()}>
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    margin: '5%'
  },
});


export default Decks;
