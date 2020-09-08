import { PayloadAction, SerializedError } from '@reduxjs/toolkit';

export const createAsyncReducers = <
  T,
  M = undefined,
  E = SerializedError | unknown
>() => ({
  pending: (state: GenericState<T, M, E>): GenericState<T, M, E> => ({
    ...state,
    loading: 'pending' as const,
  }),
  fulfilled: (
    state: GenericState<T, M, E>,
    action: PayloadAction<T>,
  ): GenericState<T, M, E> => ({
    ...state,
    data: action.payload,
    loading: 'fulfilled' as const,
    error: null,
  }),
  rejected: (
    state: GenericState<T, M, E>,
    action: PayloadAction<
      E | undefined,
      string,
      any, // eslint-disable-line @typescript-eslint/no-explicit-any
      SerializedError | null
    >,
  ): GenericState<T, M, E> => ({
    ...state,
    loading: 'rejected' as const,
    error: action.payload || action.error,
  }),
});
