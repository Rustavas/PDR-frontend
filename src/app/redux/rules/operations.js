import { createAsyncThunk } from '@reduxjs/toolkit';

import instance from '../../api/instance.js';

export const apiTitlesOfSectionsRules = createAsyncThunk(
  'titlesOfTopicsRules/getTitles',
  async (_, thunkApi) => {
    try {
      const { data } = await instance('/api/rules/sections-titles');
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const apiSectionOfRules = createAsyncThunk(
  'sectionOfRules/getSection',
  async (sectionSlag, thunkApi) => {
    try {
      const { data } = await instance(`/api/rules/${sectionSlag}`);
      // console.log(data);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const apiModalPointOfRules = createAsyncThunk(
  'pointOfRules/getPoint',
  async ({ sectionSlag, number }, thunkApi) => {
    try {
      const { data } = await instance(`/api/rules/${sectionSlag}/${number}`);
      // console.log(data);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
