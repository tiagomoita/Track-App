import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthenticationForm = ({ headerText, errorMessage, onSubmit, submitButtonText, text, navigation, navLink }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit(email, password, () => { navigation.navigate('TrackList') })} />
            </Spacer>
            <Button
                title={text}
                type="clear"
                onPress={navLink}
        
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //borderColor: 'red',
        //borderWidth: 5,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        //borderColor: 'red',
        //borderWidth: 2,
        alignSelf: 'center'

    }

});

export default AuthenticationForm;