import { createContext, FC, useCallback, useContext, useMemo, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { AuthContextType, SIGN_IN } from './types';

export const AuthContext = createContext({});

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const { token, user } = state;

  const signIn = useCallback((token) => {
    dispatch({ type: SIGN_IN, token });
  }, [dispatch]);

  const context = useMemo(() => ({
    token,
    user,
    signIn
  }), [token, user, signIn]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) as AuthContextType;
