import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { store } from './src/store';
import { RepoList } from './src/features/RepoList';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RepoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
