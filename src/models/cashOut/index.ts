import { AxiosResponse } from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createAsyncReducers } from 'utils/createAsyncReducers';
import { requestWithoutAuth } from 'utils/request';
import { name } from './constants';

export const getCashOut = createAsyncThunk(
  `${name}/getCashOut`,
  async () => {
    const { data }: AxiosResponse = await requestWithoutAuth({
      method: 'GET',
      url: 'ticket/v1/tickets/cashout',
    });
    return data;
  },
);

const initialState: GenericState = {
  data: {},
  loading: 'idle',
  error: null,
};

export const cashOut = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = createAsyncReducers<
      object
    >();
    builder
      .addCase(getCashOut.pending, pending)
      .addCase(getCashOut.fulfilled, fulfilled)
      .addCase(getCashOut.rejected, rejected);
  },
});
