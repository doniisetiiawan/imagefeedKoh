import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import AuthorRow from './components/AuthorRow';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <AuthorRow
        fullname="First Last"
        linkText="Comments"
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
      />
    </View>
  );
}
