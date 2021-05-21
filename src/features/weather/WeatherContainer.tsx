import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { WeatherTable } from './WeatherTable';
import { fetchCurrentLocationWeather } from './weatherAPI';
import { currentWeather, selectedLocation, locations, selectLocation, fetchWeatherForLocation } from './weatherSlice';
import './Weather.css';

export const WeatherContainer = () => {
    const selectedLocationWeather = useAppSelector(currentWeather);
    const location = useAppSelector(selectedLocation);
    const storedLocations = useAppSelector(locations);
    const dispatch = useAppDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            dispatch(selectLocation({ latitude, longitude }))
        },
            (error) => {
                console.log('User did not give permission.')
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
    }, [])

    useEffect(() => {
        if (location) {
            dispatch(fetchWeatherForLocation())
        }
    }, [location])

    return (
        <div>
            <WeatherTable />
        </div>
    )
}