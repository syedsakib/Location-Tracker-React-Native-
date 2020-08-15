import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';

import { navigate } from '../../src/navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_up':
      return { errorMessage: '', token: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    //console.log(response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'sign_up',
      payload: response.data.token,
    });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
