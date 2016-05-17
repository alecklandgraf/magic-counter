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
import appStyles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MTG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberPlayers: 2,
      showInitialState: true,
      defaultHealth: 20,
    };

    // set this for callbacks
    this.handleSetNumberPlayers = this.handleSetNumberPlayers.bind(this);
    this.handleSetDefaultHealth = this.handleSetDefaultHealth.bind(this);
  }
  render() {
    let {showInitialState} = this.state;
    if (showInitialState) {
      return <MTGSetup
        onSetNumberPlayers={this.handleSetNumberPlayers}
        onSetDefaultHealth={this.handleSetDefaultHealth}
        defaultHealth={this.state.defaultHealth}
      />;
    } else {
      return <MTGLayout
        numberPlayers={this.state.numberPlayers}
        reset={() => this.handleReset()}
        defaultHealth={this.state.defaultHealth}
      />;
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

  handleSetDefaultHealth(health) {
    console.log(health)
    this.setState({
      defaultHealth: health
    });
  }
}


/**
 * props: {
   onSetNumberPlayers: func - callback to set the number of players and start
   onSetDefaultHealth: func - callback to set the starting health
   defaultHealth: number - the starting health
  }
 */
class MTGSetup extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props)
    let style20 = this.props.defaultHealth === 20 ? styles.buttonSolid : styles.button;
    let style40 = this.props.defaultHealth === 40 ? styles.buttonSolid : styles.button;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>How many players?</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.props.onSetNumberPlayers(2)} style={{flex: 1}}>
            <Text style={styles.button}>
              <FontAwesome name="user" size={20}/>
              <Text> </Text>
              <FontAwesome name="user" size={20}/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.onSetNumberPlayers(3)} style={{flex: 1}}>
            <Text style={styles.button}>
              <FontAwesome name="user" size={20}/>
              <Text> </Text>
              <FontAwesome name="user" size={20}/>
              <Text> </Text>
              <FontAwesome name="user" size={20}/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.onSetNumberPlayers(4)} style={{flex: 1}}>
            <Text style={styles.button}>
              <FontAwesome name="user" size={20}/>
              <Text> </Text>
              <FontAwesome name="user" size={20}/>
              <Text> </Text>
              <FontAwesome name="user" size={20}/>
              <Text> </Text>
              <FontAwesome name="user" size={20}/>
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcome}>Default health?</Text>

        <View style={appStyles.healthQuestion}>
          <TouchableOpacity onPress={() => this.props.onSetDefaultHealth(20)}>
            <Text style={style20}>20</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.onSetDefaultHealth(40)}>
            <Text style={style40}>40</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
MTGSetup.propTypes = {
  onSetNumberPlayers: React.PropTypes.func,
  onSetDefaultHealth: React.PropTypes.func,
  defaultHealth: React.PropTypes.number,
};

/**
 * props: {
   numberPlayers: number - the number of players [2-4]
   reset: func - callback to reset the game
   defaultHealth: number - health to start with
  }
 */
class MTGLayout extends Component {
  constructor(props) {
    super(props);

    let players = {};
    for (var i = 1; i < this.props.numberPlayers + 1; i++) {
      players[i] = this.props.defaultHealth;
    }
    this.state = {
      players: players
    };

    this.addHealth = this.addHealth.bind(this);
    this.subHealth = this.subHealth.bind(this);
  }

  render () {
    let players = this.playerLayout();

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchButtonRed} onPress={() => this.props.reset()}>
          <Text style={styles.buttonTextRed}>reset</Text>
        </TouchableOpacity>
        <View>
          {players}
        </View>
      </View>
    )
  }

  playerLayout() {
    let players = [];
    for (var playerNumber in this.state.players) {
      players.push({
        number: playerNumber,
        health: this.state.players[playerNumber],
      });
    }
    return players.map((p) => {
      return (
        <View key={p.number} style={styles.player}>
          <TouchableOpacity onPress={() => this.subHealth(p.number)} style={styles.boxLeft}>
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Player {p.number}: {p.health}</Text>
          <TouchableOpacity onPress={() => this.addHealth(p.number)} style={styles.boxRight}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  addHealth(playerNumber) {
    this.setState((previousState, currentProps) => {
      previousState.players[playerNumber] += 1;
      return previousState;
    });
  }
  subHealth(playerNumber) {
    this.setState((previousState, currentProps) => {
      previousState.players[playerNumber] -= 1;
      return previousState;
    });
  }
}
MTGLayout.propTypes = {
  numberPlayers: React.PropTypes.number,
  reset: React.PropTypes.func,
  defaultHealth: React.PropTypes.number,
};
MTGLayout.defaultProps = { defaultHealth: 40 };


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#34B8F1',
    padding: 15,
    margin: 15,
    flex: 1,
    textAlign: 'center'
  },
  buttonSolid: {
    fontSize: 25,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#34B8F1',
    padding: 15,
    margin: 15,
    overflow: 'hidden',
  },
  touchButton: {
    borderColor: '#34B8F1',
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    margin: 15,
  },
  touchButtonRed: {
    borderColor: '#A94442',
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    margin: 15,
  },
  player: {
    borderColor: '#34B8F1',
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#34B8F1',
    textAlign: 'center',
    fontSize: 25,
  },
  buttonTextRed: {
    color: '#A94442',
    textAlign: 'center',
    fontSize: 25,
  },
  icon: {
    color: '#34B8F1',
    fontSize: 25,
  },
  icon: {
    color: '#34B8F1',
    fontSize: 25,
  },
  boxLeft: {
    right: 70,
    paddingLeft: 7,
    paddingRight: 7,
  },
  boxRight: {
    left: 70,
    paddingRight: 7,
    paddingLeft: 7,
  }
});

AppRegistry.registerComponent('MTG', () => MTG);
