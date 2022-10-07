import * as types from "./types";

export default (state, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return { count: state.count + 1 };
    case types.SUB_ITEM:
      return { count: state.count - 1 };
    case types.RESET_ITEM:
      return { count: 0 };
    case types.LOAD_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
