import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectHome = state => state.home || initialState;

const makeSelectValue = () =>
  createSelector(
    selectHome,
    homeState => homeState.value,
  );

export { selectHome, makeSelectValue };
