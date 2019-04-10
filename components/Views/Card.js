import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

class Card extends Component {

  render() {

    const { item } = this.props;
    console.log(item);
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: '10%',
    margin: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
