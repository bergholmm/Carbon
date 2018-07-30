import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { goToAuth, goHome, push} from '../utils/navigation';
import { Navigation } from 'react-native-navigation';

class Entry extends React.Component {
    constructor(props) {
        super(props);
    }
    static get options() {
        return {
        };
    }
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.logoContainer }>
                    <Text style={ styles.logoText }> Logo </Text>
                </View>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity
                        style={ styles.signInButton }
                        activeOpacity={ 0.9 }
                        onPress={ goHome }
                    >
                        <Text style={ styles.buttonText }> Sign in </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ styles.registerButton }
                        activeOpacity={ 0.9 }
                        onPress={ goHome }
                    >
                        <Text style={ styles.buttonText }> Register </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    signInButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    registerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
    },
    logoText: {
        fontSize: 34,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
});

export default Entry;
