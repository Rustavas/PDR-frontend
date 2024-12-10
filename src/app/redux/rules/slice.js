import { createSlice } from '@reduxjs/toolkit';
import {
  apiTitlesOfSectionsRules,
  apiSectionOfRules,
  apiModalPointOfRules,
} from './operations';

const INITIAL_STATE = {
  titles: [],
  section: {},
  point: {},
  isLoading: false,
  isError: false,
};

const rulesSlice = createSlice({
  name: 'rules',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(apiTitlesOfSectionsRules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.titles = action.payload;
      })
      .addCase(apiTitlesOfSectionsRules.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiTitlesOfSectionsRules.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiSectionOfRules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.section = action.payload;
      })
      .addCase(apiSectionOfRules.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiSectionOfRules.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiModalPointOfRules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log(action.payload);
        state.point = action.payload;
      })
      .addCase(apiModalPointOfRules.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiModalPointOfRules.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const rulesReducer = rulesSlice.reducer;
