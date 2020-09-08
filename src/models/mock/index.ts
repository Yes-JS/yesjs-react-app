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

const name = 'mock';

export const mockSelector = (state: RootState) => state[name];
export const mockDataSelector = (state: RootState) => mockSelector(state).data;
export const mockLoadingSelector = (state: RootState) =>
  mockSelector(state).loading;
export const mockIsPendingSelector = (state: RootState) =>
  mockLoadingSelector(state) === 'pending';
export const mockIsFulfilledSelector = (state: RootState) =>
  mockLoadingSelector(state) === 'fulfilled';
export const mockIsRejectedSelector = (state: RootState) =>
  mockLoadingSelector(state) === 'rejected';

export const useMockSelector = () => useSelector(mockSelector);
export const useMockDataSelector = () => useSelector(mockDataSelector);
export const useMockLoadingSelector = () => useSelector(mockLoadingSelector);
export const useMockIsPendingSelector = () =>
  useSelector(mockIsPendingSelector);
export const useMockIsFulfilledSelector = () =>
  useSelector(mockIsFulfilledSelector);
export const useMockIsRejectedSelector = () =>
  useSelector(mockIsRejectedSelector);

export const testGet = createAsyncThunk<
  object[],
  {
    id: string;
  }
>(`${name}/testGet`, async ({ id }) => {
  const { data }: AxiosResponse = await requestWithoutAuth({
    method: 'get',
    url: `/posts/${id}`,
    withCredentials: false,
  });

  return data;
});

export const testPost = createAsyncThunk(`${name}/testPost`, async () => {
  const { data }: AxiosResponse = await requestWithoutAuth({
    method: 'post',
    url: '/posts',
    withCredentials: true,
    data: 'test',
  });
  return data;
});

interface IMockData {
  posts: object[];
}

const initialState: GenericState<IMockData> = {
  data: {
    posts: [],
  },
  loading: 'idle',
  error: null,
};

export const mock = createSlice({
  name,
  initialState,
  reducers: {
    socketUpdate: (state, { payload }) => {
      console.log(`socketUpdate ${payload}`);
      // return ({
      //   ...state,
      //   data: [...Object.values(state.data), payload]
      // })
    },
  },
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = createAsyncReducers<IMockData>();

    builder
      .addCase(testGet.pending, pending)
      .addCase(testGet.fulfilled, (state, action) => {
        state.data.posts.push(action.payload);
      })
      .addCase(testGet.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(testPost.fulfilled, fulfilled)
      .addCase(testPost.rejected, rejected);
  },
});

export const { socketUpdate } = mock.actions;

export const connect = createAction<string>(`${name}/connect`);
export const disconnect = createAction(`${name}/disconnect`);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const socketMessage = createAction<any>(`${name}/socketMessage`);
