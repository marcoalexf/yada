import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getCurrentLocation } from '../../utils';
import { fetchCurrentLocationWeather } from './weatherAPI';

export interface WeatherState {
    selectedLocation: any;
    currentSelectedLocationWeather: any;
    status: 'idle' | 'loading' | 'failed';
    locations: any[];
}

const initialState: WeatherState = {
    selectedLocation: null,
    currentSelectedLocationWeather: null,
    status: 'idle',
    locations: [],
};

export const fetchWeatherForLocation = createAsyncThunk(
    'weather/fetchWeatherForLocation',
    async () => {
        return await fetchCurrentLocationWeather();
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        selectLocation: (state, action) => {
            state.selectedLocation = action.payload;
        },
        addLocation: (state, action) => {
            state.locations.push(action.payload);
        },
        removeLocation: (state, action) => {
            const indexToRemove = state.locations.findIndex(action.payload);
            state.locations.splice(indexToRemove, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherForLocation.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchWeatherForLocation.fulfilled, (state, action) => {
                const sevenDaysWeather: any[] = action.payload.dataseries
                state.status = 'idle';
                state.currentSelectedLocationWeather = sevenDaysWeather
            });
    },
});

export const { addLocation, removeLocation, selectLocation } = weatherSlice.actions;

export const currentWeather = (state: RootState) => state.weather.currentSelectedLocationWeather;
export const selectedLocation = (state: RootState) => state.weather.selectedLocation;
export const locations = (state: RootState) => state.weather.locations;


export default weatherSlice.reducer;
