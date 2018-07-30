import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { goToAuth, goHome } from './src/utils/navigation';
import { USER_KEY } from './src/config';

export default class App extends Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY);
            if (user) {
                goHome();
            } else {
                goToAuth();
            }
        } catch (err) {
            goToAuth();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.logoContainer }>
                    <Text style={ styles.logoText }> Logo </Text>
                </View>
                <View style={ styles.buttonContainer }>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
    },
    logoText: {
        fontSize: 34,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
});
