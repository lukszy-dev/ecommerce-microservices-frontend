import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { AuthAction, AuthReducerState, AuthUserProps, SIGN_IN, SIGN_OUT } from './types';

const AUTHORIZATION_COOKIE = 'Authorization';

const decodeToken = (token) => {
  const { email, role } = jwtDecode<AuthUserProps>(token);

  return {
    email,
    role
  };
};

export const initialState = () => {
  const token = Cookies.get(AUTHORIZATION_COOKIE);
  let user = {};

  if (token) {
    user = decodeToken(token);
  }

  return {
    token,
    user
  };
};

export const reducer = (
  state: AuthReducerState,
  action: AuthAction
): AuthReducerState => {
  switch (action.type) {
    case SIGN_IN:
      if (action.token) {
        Cookies.set(AUTHORIZATION_COOKIE, action.token);
        const user = decodeToken(action.token);
        return { ...state, token: action.token, user };
      }
      return state;
    case SIGN_OUT:
      Cookies.remove(AUTHORIZATION_COOKIE);
      return initialState();
  }
};
