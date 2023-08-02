import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const filterPersistConfig = {
  key: 'filter',
  storage,
};

export const filterReducer = persistReducer(
  filterPersistConfig,
  filterSlice.reducer
);

export const { setFilter } = filterSlice.actions;
