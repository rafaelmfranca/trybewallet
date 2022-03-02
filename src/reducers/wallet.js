import {
  REQUEST_API,
  FAILED_REQUEST,
  GET_CURRENCIES,
  SET_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  error: '',
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case REQUEST_API:
    return { ...state, isFetching: true };
  case FAILED_REQUEST:
    return { ...state, isFetching: false, error: payload };
  case GET_CURRENCIES:
    return { ...state, isFetching: false, currencies: payload, error: '' };
  case SET_EXPENSE:
    return {
      ...state,
      isFetching: false,
      expenses: [...state.expenses, payload],
      error: '',
    };
  default:
    return state;
  }
};

export default wallet;
