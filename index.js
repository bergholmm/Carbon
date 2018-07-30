import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

const sceneCreator = (sceneComp, store) => {
    return () => {
        return class SceneWrapper extends React.Component {
            render () {
                return <Provider store={store}>{React.createElement(sceneComp)}</Provider>
            }
        }
    }
}

import { RepoList } from './src/features/RepoList';
import Entry from './src/scens/Entry';
import App from './App';

const registerScreens = () => {
    Navigation.registerComponent('Home', sceneCreator(RepoList.component, store));
    Navigation.registerComponent('Initializing', (sc) => sceneCreator(App, store)());
    Navigation.registerComponent('Entry', sceneCreator(Entry, store));
};

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Initializing',
            },
        },
    });
});
