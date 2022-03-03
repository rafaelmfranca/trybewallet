import fetchExchangeRates from '../services/exchangeRatesApi';

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_EXPENSE = 'SET_EXPENSE';
export const REQUEST_API = 'REQUEST_API';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SET_EDITED_EXPENSE = 'SET_EDITED_EXPENSE';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const setCurrenciesAction = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const setExpenseAction = (payload) => ({
  type: SET_EXPENSE,
  payload,
});

export const requestApiAction = () => ({
  type: REQUEST_API,
});

export const requestFailedAction = (payload) => ({
  type: FAILED_REQUEST,
  payload,
});

export const removeExpenseAction = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const editExpenseAction = () => ({
  type: EDIT_EXPENSE,
});

export const setEditedExpenseAction = (payload) => ({
  type: SET_EDITED_EXPENSE,
  payload,
});

export const addExpense = (state) => async (dispatch) => {
  dispatch(requestApiAction());
  try {
    const data = await fetchExchangeRates();
    if (data.message) throw Error(data.message);
    return dispatch(setExpenseAction({ ...state, exchangeRates: data }));
  } catch (err) {
    return dispatch(requestFailedAction(err.message));
  }
};

export const getCurrencies = () => async (dispatch) => {
  dispatch(requestApiAction());
  try {
    const data = await fetchExchangeRates();
    if (data.message) throw Error(data.message);
    const currencies = Object.keys(data);
    return dispatch(setCurrenciesAction(currencies));
  } catch (err) {
    return dispatch(requestFailedAction(err.message));
  }
};
