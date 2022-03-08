import {
  REQUEST_API,
  FAILED_REQUEST,
  GET_CURRENCIES,
  SET_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_EDITED_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  isEditing: false,
  error: '',
  currencies: [],
  expenses: [],
  lastExpenseId: 0,
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
      lastExpenseId: payload.id,
      error: '',
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      isEditing: true,
    };
  case SAVE_EDITED_EXPENSE:
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === payload.id) return payload;
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
