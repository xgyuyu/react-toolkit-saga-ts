import { delay, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, take } from 'redux-saga/effects';
import { LoginPayload, loginActions } from './loginSlice';
import { push } from 'connected-react-router';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000); // yield call(api, '')
    yield put(loginActions.loginSuccess());

    // Redirect to Admin page
    yield put(push('/home'));
  } catch (error: any) {
    yield put(loginActions.loginFailed(error.message)); // Dispatch action
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');

  // Redirect to Login page
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    console.log('loginActions=====', loginActions);
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        loginActions.login.type
      );
      yield fork(handleLogin, action.payload); // Non-blocking
    }

    yield take(loginActions.logout.type);
    yield call(handleLogout); // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
  }
}

export function* loginSaga() {
  yield fork(watchLoginFlow);
}
