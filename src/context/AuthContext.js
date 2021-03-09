import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from './../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': {
            return { ...state, errorMessage: action.payload };
        }
        case 'signin': {
            return { errorMessage: '', token: action.payload };
        }
        case 'clear_error_message': {
            return { ...state, errorMessage: '' };
        }
        case 'signout': {
            return { token: null, errorMessage: '' };
        }
        default:
            return state;
    }
};

const tryLocalLogin = dispatch => {
    return async (callback, callback2) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({ type: 'signin', payload: token });
            callback();
        } else {
            callback2();
        }
    }
};

const clearErrorMessage = dispatch => {
    return () => {
        dispatch({ type: 'clear_error_message' });
    }
};

const signup = dispatch => {
    return async (email, password, callback) => {
        try {
            // Save to MongoDB 
            const response = await trackerApi.post('/signup', { email, password });
            //Save into device storage
            await AsyncStorage.setItem('token', response.data.token);
            //make the token available in all screens in our application
            dispatch({ type: 'signin', payload: response.data.token });

            console.log(response.data);
            //change to TrackList screen
            callback();

        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup' });
        }

    };
};

const signin = dispatch => {
    return async (email, password, callback) => {
        try {
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });

            callback();

            console.log(response.data);
        } catch (err) {
            console.log(err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with signin' });
        }

    };
};

const signout = dispatch => {
    return async (callback) => {
        try {
            await AsyncStorage.removeItem('token');
            dispatch({ type: 'signout' });
            callback();
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with signout' });
        }
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalLogin },
    { token: null, errorMessage: '' }
);