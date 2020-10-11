import {
  ADD_ITEM,
  DELETE_ITEM,
  SUBMIT_LIST
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        wishList: [
          ...state.wishList,
          action.payload
        ]
      });
    case SUBMIT_LIST:
        return INITIAL_STATE;
    case DELETE_ITEM:
      let list=state.wishList.filter(entry=> entry !== action.payload);
      return Object.assign({}, state, {
        wishList: [
          ...list,
        ]
      });
    default:
      return state;
  }
};

export default reducer;