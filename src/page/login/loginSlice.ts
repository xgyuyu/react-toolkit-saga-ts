import { RootState } from './../../app/store';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: any;
}

const initialState: LoginState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      console.log('action=====', action);
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      console.log(action.payload);
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const loginActions = loginSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.login.logging;

// Reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
