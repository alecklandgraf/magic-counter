import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import sample from 'lodash/sample';


class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerInProgress: false,
      playerOneClock: 0, // seconds
      playerTwoClock: 0,
      playerThreeClock: 0,
      playerFourClock: 0,
      activePlayer: null,
      playerClocks: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
      },
      gameClock: 0,
    };
    this.t = null;
  }

  render () {
    const playerOneButtonStyle = this.state.activePlayer === 1 ? styles.selectedButton : styles.button;
    const playerOneTextStyle = this.state.activePlayer === 1 ? styles.selectedPlayerText : styles.playerText;
    const playerTwoButtonStyle = this.state.activePlayer === 2 ? styles.selectedButton : styles.button;
    const playerTwoTextStyle = this.state.activePlayer === 2 ? styles.selectedPlayerText : styles.playerText;
    const playerThreeButtonStyle = this.state.activePlayer === 3 ? styles.selectedButton : styles.button;
    const playerThreeTextStyle = this.state.activePlayer === 3 ? styles.selectedPlayerText : styles.playerText;
    const playerFourButtonStyle = this.state.activePlayer === 4 ? styles.selectedButton : styles.button;
    const playerFourTextStyle = this.state.activePlayer === 4 ? styles.selectedPlayerText : styles.playerText;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity>
            <Text style={styles.toolbarButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>Player Clock</Text>
          <Text style={styles.toolbarButton}></Text>
        </View>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Tap a player to pass control to them and start his/her game clock.</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={playerOneButtonStyle} onPress={() => this.startPlayerClock(1)}>
              <Text style={playerOneTextStyle}>{this.props.playerOneName}</Text>
              <Text style={playerOneTextStyle}>{this.state.playerOneClock}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={playerTwoButtonStyle} onPress={() => this.startPlayerClock(2)}>
              <Text style={playerTwoTextStyle}>{this.props.playerTwoName}</Text>
              <Text style={playerTwoTextStyle}>{this.state.playerTwoClock}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.goButton} onPress={() => this.pauseClock()}>
              <Text style={styles.goText}>pause</Text>
              <Text style={styles.selectedPlayerText}>{this.state.gameClock}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={playerThreeButtonStyle} onPress={() => this.startPlayerClock(3)}>
              <Text style={playerThreeTextStyle}>{this.props.playerThreeName}</Text>
              <Text style={playerThreeTextStyle}>{this.state.playerThreeClock}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={playerFourButtonStyle} onPress={() => this.startPlayerClock(4)}>
              <Text style={playerFourTextStyle}>{this.props.playerFourName}</Text>
              <Text style={playerFourTextStyle}>{this.state.playerFourClock}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  startPlayerClock(playerNumber) {
    const cls = this;
    this.setState({
      activePlayer: playerNumber,
      timerInProgress: true,
    });


    function add() {
      cls.setState({
        gameClock: cls.state.gameClock + 1,
      });
      timer();
    }

    function timer() {
      cls.t = setTimeout(add, 1000);
    }
    timer();
  }

  pauseClock() {
    this.setState({timerInProgress: false, activePlayer: null});
    clearTimeout(this.t);
  }
}
Clock.defaultProps = {
  playerOneName: 'Matt',
  playerTwoName: 'Collin',
  playerThreeName: 'Tom',
  playerFourName: 'Aleck',
};

// dream in color colourlovers.com pallet http://www.colourlovers.com/palette/871636/A_Dream_in_Color
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#519548',
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  toolbarButton: {
    color: '#fff',
    width: 50,
    textAlign: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EAFDE6',
  },
  header: {
    padding: 10,

  },
  headerText: {
    color: '#1B676B',
    fontSize: 20,
  },
  playerText: {
    color: '#1B676B',
    width: 150,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectedPlayerText: {
    color: '#fff',
    width: 150,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  goText: {
    color: '#fff',
    width: 150,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },
  mainContainer: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    margin: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#88C425',
    justifyContent: 'center',
    margin: 10,
  },
  selectedButton: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#EAFDE6',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#1B676B',
  },
  randomlyPickedButton: {
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#F64E15',
    borderColor: '#EAFDE6',
  },
  goButton: {
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#88C425',
  }
});


export default Clock = Clock;
