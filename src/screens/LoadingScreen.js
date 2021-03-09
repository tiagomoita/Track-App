import { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';


const LoadingScreen = ({ navigation }) => {
    const { tryLocalLogin } = useContext(AuthContext);

    // Try login with local storage first.
    useEffect(() => {
        tryLocalLogin(() => { navigation.navigate('TrackList') }, () => { navigation.navigate('Signin')} );
    }, []);

    return null;
};

export default LoadingScreen;