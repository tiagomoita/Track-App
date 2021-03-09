import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from './../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);


    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            
            <Spacer>
                <Button title="Sign Out" onPress={() => { signout(() => { navigation.navigate('Signin') }) }} />
            </Spacer>

        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //borderColor: 'red',
        //borderWidth: 5,
        justifyContent: 'center'
    }
});

export default AccountScreen;