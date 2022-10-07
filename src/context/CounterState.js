import { useReducer } from "react";
import counterReducer from "./counterReducer";
import CounterContext from "./context";
import * as types from "./types";

const CounterState = (props) => {
  const initialState = {
    count: 0,
    users: []
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const add = () => {
    dispatch({
      type: types.ADD_ITEM
    });
  };

  const sub = () => {
    dispatch({
      type: types.SUB_ITEM
    });
  };

  const reset = () => {
    dispatch({
      type: types.RESET_ITEM
    });
  };

  const loadUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/");
      const data = await res.json();
      dispatch({
        type: types.LOAD_USERS,
        payload: data
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <CounterContext.Provider
      value={{
        count: state.count,
        users: state.users,
        add,
        sub,
        reset,
        loadUsers
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterState;
