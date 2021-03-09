import createDataContext from './createDataContext';
import trackerApi from './../api/tracker';


const trackReducer = (state, action) => {
    switch (action.type) {
        case 'save_recording':
            return [{ name: action.payload.name, locations: action.payload.name }]
        case 'fetch_tracks':
            return action.payload
        default:
            return state;
    }
};

const saveTrack = dispatch => {
    return async (name, locations, callback) => {
        try {
            const response = await trackerApi.post('/tracks', { name, locations });
            callback();

        } catch (e) {
            console.log(e.message);
            // dispatch({ type: 'save_error', payload: "Some problem occur while saving the track" });
        }

    };
};

const fetchTracks = dispatch => {
    return async () => {
        try {
            const response = await trackerApi.get('/tracks');
            dispatch({ type: 'fetch_tracks', payload: response.data });
    
        } catch (e) {
            console.log(e.message);
        }
    };
};


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, saveTrack },
    []
);