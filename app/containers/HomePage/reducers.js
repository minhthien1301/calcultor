import produce from 'immer';
import * as types from './constants';

export const initialState = {
  value: '',
};

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_RESULT:
        state.value = '';
        return { ...state };
      case types.SET_VALUE:
        state.value = action.value;
        return { ...state };
      default:
        return state;
    }
  });

export default homeReducer;