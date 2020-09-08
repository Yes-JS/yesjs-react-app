/// <reference types="react-scripts" />

type Loading = 'idle' | 'pending' | 'fulfilled' | 'rejected';

interface GenericState<
  T = {},
  M = undefined,
  E = import('@reduxjs/toolkit').SerializedError
> {
  data: T;
  meta?: M;
  loading: Loading;
  error?: E | import('@reduxjs/toolkit').SerializedError | null;
}
