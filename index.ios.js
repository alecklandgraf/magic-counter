/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class MTG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberPlayers: 2,
      showInitialState: true,
    };
  }
  handleSetNumberPlayers(numberPlayers) {
    this.setState({
      numberPlayers: numberPlayers,
      showInitialState: false,
    });
  }
  render() {
    let {showInitialState} = this.state;
    if (showInitialState) {
      return <MTGSetup onSetNumberPlayers={this.handleSetNumberPlayers} />;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.button}>play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


class MTGSetup extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    console.log(e);
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>How many players?</Text>
        <TouchableOpacity onPress={() => this.handleClick(2)}>
          <Text style={styles.button}>two</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleClick(3)}>
          <Text style={styles.button}>three</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleClick(4)}>
          <Text style={styles.button}>four</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#000',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#34B8F1',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    fontSize: 25,
    borderColor: '#34B8F1',
    borderWidth: 3,
    borderRadius: 5,
    textAlign: 'center',
    // backgroundColor: '#34B8F1',
    color: '#34B8F1',
    padding: 15,
    margin: 15,
    // left: 20,
    top: 41,
  }
});

AppRegistry.registerComponent('MTG', () => MTGSetup);
