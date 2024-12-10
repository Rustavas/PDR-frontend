import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import instance from '../../api/instance.js';

export const apiTypesOfTests = createAsyncThunk(
  'typesOfTests/getTypes',
  async (_, thunkApi) => {
    try {
      const { data } = await instance('api/tests/types-of-tests');

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const apiTitlesOfSectionsTests = createAsyncThunk(
  'titlesOfSectionsTests/getTitles',
  async (_, thunkApi) => {
    try {
      const { data } = await instance('/api/tests/sections/sections-titles');

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const apiSectionDefaultTests = createAsyncThunk(
  'sectionDefaultTests/getdefaultTests',
  async (sectionSlag, thunkApi) => {
    try {
      const { data } = await instance(`/api/tests/sections/${sectionSlag}`);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const apiSectionRandomTests = createAsyncThunk(
  'sectionRendomTests/getRendomTests',
  async (sectionSlag, thunkApi) => {
    try {
      const { data } = await instance(
        `/api/tests/sections/${sectionSlag}/random`,
      );

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
