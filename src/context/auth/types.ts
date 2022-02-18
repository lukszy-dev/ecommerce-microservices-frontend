export const SIGN_IN = 'AUTH_SIGN_IN';
export const SIGN_OUT = 'AUTH_SIGN_OUT';

export interface AuthReducerState {
  token: string;
  user?: AuthUserProps;
}

export interface AuthUserProps {
  email?: string;
  role?: string;
}

export interface AuthContextType {
  token?: string;
  user?: AuthUserProps;
  signIn: (token: string) => void;
}

export interface SignInAction {
  type: typeof SIGN_IN;
  token: string;
}

export interface SignOutAction {
  type: typeof SIGN_OUT;
}

export type AuthAction = SignInAction | SignOutAction;
