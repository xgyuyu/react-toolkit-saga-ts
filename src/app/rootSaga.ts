import { all } from 'redux-saga/effects';
import { loginSaga } from '../page/login/loginSaga';
import homeSaga from '../page/home/homeSaga';

export default function* rootSaga() {
  yield all([loginSaga(), homeSaga()]);
}
