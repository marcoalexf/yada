import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import newsReducer from '../features/hacker-news/newsSlice';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    weather: weatherReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
