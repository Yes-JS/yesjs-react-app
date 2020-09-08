import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { name } from './constants';

export const cashOutSelector = (state: RootState) => state[name];

export const cashOutDataSelector = (state: RootState) =>
  cashOutSelector(state).data;
export const loadingCashOutSelector = (state: RootState) =>
  cashOutSelector(state).loading;

export const useCashOutDataSelector = () => useSelector(cashOutDataSelector);
export const useloadingCashOutSelector = () =>
  useSelector(loadingCashOutSelector);
