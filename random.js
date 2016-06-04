import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import sample from 'lodash/sample';


class Rando extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneSelected: true,
      playerTwoSelected: false,
      playerThreeSelected: false,
      playerFourSelected: false,
      randomlyPickedPlayer: false,
    };
  }

  render () {
    const playerOneButtonStyle = this.state.randomlyPickedPlayer === 1 ? styles.randomlyPickedButton : this.state.playerOneSelected ? styles.selectedButton : styles.button;
    const playerOneTextStyle = this.state.playerOneSelected ? styles.selectedPlayerText : styles.playerText;
    const playerTwoButtonStyle = this.state.randomlyPickedPlayer === 2 ? styles.randomlyPickedButton : this.state.playerTwoSelected ? styles.selectedButton : styles.button;
    const playerTwoTextStyle = this.state.playerTwoSelected ? styles.selectedPlayerText : styles.playerText;
    const playerThreeButtonStyle = this.state.randomlyPickedPlayer === 3 ? styles.randomlyPickedButton : this.state.playerThreeSelected ? styles.selectedButton : styles.button;
    const playerThreeTextStyle = this.state.playerThreeSelected ? styles.selectedPlayerText : styles.playerText;
    const playerFourButtonStyle = this.state.randomlyPickedPlayer === 4 ? styles.randomlyPickedButton : this.state.playerFourSelected ? styles.selectedButton : styles.button;
    const playerFourTextStyle = this.state.playerFourSelected ? styles.selectedPlayerText : styles.playerText;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity>
            <Text style={styles.toolbarButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>Rando Time</Text>
          <Text style={styles.toolbarButton}></Text>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <TouchableOpacity style={playerOneButtonStyle} onPress={()=>this.setState({playerOneSelected: !this.state.playerOneSelected, randomlyPickedPlayer: false})}>
              <Text style={playerOneTextStyle}>{this.props.playerOneName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={playerTwoButtonStyle} onPress={()=>this.setState({playerTwoSelected: !this.state.playerTwoSelected, randomlyPickedPlayer: false})}>
              <Text style={playerTwoTextStyle}>{this.props.playerTwoName}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.goButton} onPress={() => this.selectRandomPlayer()}>
              <Text style={styles.goText}>Go!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={playerThreeButtonStyle} onPress={()=>this.setState({playerThreeSelected: !this.state.playerThreeSelected, randomlyPickedPlayer: false})}>
              <Text style={playerThreeTextStyle}>{this.props.playerThreeName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={playerFourButtonStyle} onPress={()=>this.setState({playerFourSelected: !this.state.playerFourSelected, randomlyPickedPlayer: false})}>
              <Text style={playerFourTextStyle}>{this.props.playerFourName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  selectRandomPlayer() {
    let playersSelected = [];
    if (this.state.playerOneSelected) {
      playersSelected.push(1);
    }
    if (this.state.playerTwoSelected) {
      playersSelected.push(2);
    }
    if (this.state.playerThreeSelected) {
      playersSelected.push(3);
    }
    if (this.state.playerFourSelected) {
      playersSelected.push(4);
    }
    if (playersSelected.length > 0) {
      let player = sample(playersSelected);
      this.setState({
        randomlyPickedPlayer: player,
      });
    }
  }
}
Rando.defaultProps = {
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
    padding: 10,
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
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#1B676B',
  },
  randomlyPickedButton: {
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#F64E15',
  },
  goButton: {
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#88C425',
  }
});


export default Rando = Rando;
