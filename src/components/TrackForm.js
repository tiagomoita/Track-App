import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from './../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';

const TrackForm = ({ navigation }) => {
    const { state: { name, recording, locations }, changeName, startRecording, stopRecording, reset } = useContext(LocationContext);
    const { saveTrack } = useContext(TrackContext);

    //console.log(state.locations.length);

    return (
        <View style={styles.container}>

            <Input
                placeholder="Track name"
                value={name}
                onChangeText={changeName}
            />

            <Spacer>
                {recording
                    ? <Button buttonStyle={{ backgroundColor: 'red' }} title="Stop" onPress={stopRecording} />
                    : <Button title="Start Recording" onPress={startRecording} />
                }
            </Spacer>
            <Spacer>
                {(!recording && locations.length) ? <Button title="Save" onPress={async () => {await saveTrack(name, locations,() => { navigation.navigate('TrackList')} ); reset();}} /> : null}
            </Spacer>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default TrackForm;