import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case LOGIN:
    return { ...state, ...payload };
  default:
    return state;
  }
};

export default user;
