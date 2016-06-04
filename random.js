import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


class Rando extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneSelected: true,
      playerTwoSelected: false,
      playerThreeSelected: false,
      playerFourSelected: false,

    };
  }

  render () {

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
            <TouchableOpacity style={styles.selectedButton}>
              <Text style={styles.selectedPlayerText}>{this.props.playerOneName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.playerText}>{this.props.playerTwoName}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.goButton}>
              <Text style={styles.goText}>Go!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.playerText}>{this.props.playerThreeName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.playerText}>{this.props.playerFourName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
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
  goButton: {
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#88C425',
  }
});


export default Rando = Rando;
