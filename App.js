/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Image
       style={styles.gambar}
       source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
     />
        <Text style={styles.welcome}>Helloo</Text>
        <Text style={styles.instructions}>Nama  : Anzalla Dzikri Dhamara</Text>
        <Text style={styles.instructions}>No    : 10</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 2</Text>

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
    margin: 10,
    color: 'white',
    fontFamily: 'Roboto-Italic',

  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },

  gambar:{
    width: 100,
    height: 100,
    marginBottom: 40,
}
});