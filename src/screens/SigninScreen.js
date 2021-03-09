import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthenticationForm from './../components/AuthenticationForm';
import { Context as AuthContext } from '../context/AuthContext';


const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthenticationForm
                headerText="Sign In To Your Account"
                submitButtonText="Sign In"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                navigation={navigation}
                text="Don't have an account ? Go back to Sign Up"
                navLink={() => { navigation.pop(); }}
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //borderColor: 'blue',
        //borderWidth: 5
    }
});

export default SigninScreen;