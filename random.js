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
            <TouchableOpacity>
              <Text style={styles.playerText}>Matt</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.playerText}>Collin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.playerText}>Go!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={styles.playerText}>Tom</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.playerText}>Aleck</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

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
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#EAFDE6',
  },
  playerText: {
    color: '#1B676B',
    width: 50,
    textAlign: 'center',
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});


export default Rando = Rando;
