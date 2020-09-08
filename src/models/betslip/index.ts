import { AxiosResponse } from 'axios';
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createAction,
} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { createAsyncReducers } from 'utils/createAsyncReducers';
import { requestWithoutAuth } from 'utils/request';

const name = 'betslip';

export const betslipSelector = (state: RootState) => state[name];
export const betslipDataSelector = (state: RootState) =>
  betslipSelector(state).data;
export const betslipLoadingSelector = (state: RootState) =>
  betslipSelector(state).loading;
export const betslipIsPendingSelector = (state: RootState) =>
  betslipLoadingSelector(state) === 'pending';
export const betslipIsFulfilledSelector = (state: RootState) =>
  betslipLoadingSelector(state) === 'fulfilled';
export const betslipIsRejectedSelector = (state: RootState) =>
  betslipLoadingSelector(state) === 'rejected';

export const useBetslipSelector = () => useSelector(betslipSelector);
export const useBetslipDataSelector = () => useSelector(betslipDataSelector);
export const useBetslipLoadingSelector = () =>
  useSelector(betslipLoadingSelector);
export const useBetslipIsPendingSelector = () =>
  useSelector(betslipIsPendingSelector);
export const useBetslipIsFulfilledSelector = () =>
  useSelector(betslipIsFulfilledSelector);
export const useBetslipIsRejectedSelector = () =>
  useSelector(betslipIsRejectedSelector);

export const getPosts = createAsyncThunk(
  `${name}/getPosts`,
  async () => {
    const { data }: AxiosResponse = await requestWithoutAuth({
      method: 'get',
      url: '/posts',
      withCredentials: false,
    });
    console.log(data);
    return data;
  },
);

export const addCombination = createAsyncThunk(`${name}/addCombination`, async (combination) => {
  const { data }: AxiosResponse = await requestWithoutAuth({
    method: 'post',
    url: '/ticket/v1/betslip/combination',
    withCredentials: true,
    data: combination,
  });
  return data;
});


const initialState: GenericState = {
  data: {},
  loading: 'idle',
  error: null,
};

export const betslip = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = createAsyncReducers<object>();

    builder
      .addCase(getPosts.pending, pending)
      .addCase(getPosts.fulfilled, fulfilled)
      .addCase(getPosts.rejected, rejected)
      .addCase(addCombination.fulfilled, fulfilled)
      .addCase(addCombination.rejected, rejected)
  },
});

export const connect = createAction<string>(`${name}/connect`);
export const disconnect = createAction(`${name}/disconnect`);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const socketMessage = createAction<any>(`${name}/socketMessage`);
