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

    // set this for callbacks
    this.handleSetNumberPlayers = this.handleSetNumberPlayers.bind(this);
  }
  render() {
    let {showInitialState} = this.state;
    if (showInitialState) {
      return <MTGSetup onSetNumberPlayers={this.handleSetNumberPlayers} />;
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.touchButton} onPress={() => this.handleReset()}>
            <Text style={styles.buttonText}>reset</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>{this.state.numberPlayers}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  handleReset() {
    this.setState({showInitialState: true});
  }

  handleSetNumberPlayers(numberPlayers) {
    console.log(numberPlayers)
    this.setState({
      numberPlayers: numberPlayers,
      showInitialState: false,
    });
  }
}


/**
 * props: {
   onSetNumberPlayers: func - callback
  }
 */
class MTGSetup extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>How many players?</Text>
        <TouchableOpacity onPress={() => this.props.onSetNumberPlayers(2)}>
          <Text style={styles.button}>two</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onSetNumberPlayers(3)}>
          <Text style={styles.button}>three</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onSetNumberPlayers(4)}>
          <Text style={styles.button}>four</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
MTGSetup.propTypes = {onSetNumberPlayers: React.PropTypes.func};

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
  // todo see if I can move the button styles to the TouchableOpacity since the
  // the Text button bleeds into the TouchableOpacity below it.
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
    // top: 41,
  },
  touchButton: {
    borderColor: '#34B8F1',
    borderWidth: 3,
    borderRadius: 5,
    // color: '#34B8F1',
    padding: 15,
    margin: 15,
    // left: 20,
    // top: 41,
  },
  buttonText: {
    color: '#34B8F1',
    textAlign: 'center',
    fontSize: 25,
  }
});

AppRegistry.registerComponent('MTG', () => MTG);
