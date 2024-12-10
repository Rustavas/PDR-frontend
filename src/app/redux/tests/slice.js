import { createSlice } from '@reduxjs/toolkit';
import {
  apiTypesOfTests,
  apiTitlesOfSectionsTests,
  apiSectionDefaultTests,
  apiSectionRandomTests,
} from './operations';

const INITIAL_STATE = {
  types: [],
  titles: [],
  section: {},
  sectionRandom: {},
  isLoading: false,
  isError: false,
};

const testsSlice = createSlice({
  name: 'tests',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(apiTitlesOfSectionsTests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.titles = action.payload;
      })
      .addCase(apiTitlesOfSectionsTests.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiTitlesOfSectionsTests.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiTypesOfTests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.types = action.payload;
      })
      .addCase(apiTypesOfTests.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiTypesOfTests.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiSectionDefaultTests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log(action.payload)
        state.section = action.payload;
      })
      .addCase(apiSectionDefaultTests.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiSectionDefaultTests.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiSectionRandomTests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log(action.payload)
        state.sectionRandom = action.payload;
      })
      .addCase(apiSectionRandomTests.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiSectionRandomTests.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const testsReducer = testsSlice.reducer;
