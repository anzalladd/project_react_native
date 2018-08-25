/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.gambar} 
        source={require('./content/gambar/fotoprofil.jpg')} />
        <Text style={styles.welcome}>Helloo</Text>
        <Text style={styles.welcome}>Introducing</Text>
        <Text style={styles.instructions1}>Nama  : Anzalla Dzikri Dhamara</Text>
        <Text style={styles.instructions2}>No    : 10</Text>
        <Text style={styles.instructions3}>Kelas : XI RPL 2</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'navy',

  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom:0,
    color: 'white',
    fontFamily: 'Roboto-Italic',

  },
  instructions1: {
    textAlign: 'center',
    color: 'white',
    marginTop:30,
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
  instructions2: {
    textAlign: 'center',
    color: 'white',
    
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
  instructions3: {
    textAlign: 'center',
    color: 'white',
    
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },

  gambar:{
    width: 130,
    height: 130,
    marginBottom: 40,
}
});
