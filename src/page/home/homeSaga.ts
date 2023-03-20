import { call, put, takeLatest } from 'redux-saga/effects';
import { cityActions } from './homeSlice';

function* fetchCityList() {
  try {
    const response: any = {};
    yield put(cityActions.fetchCityListSuccess(response));
  } catch (error: any) {
    console.log(`Failed to fetch city list`, error);
    yield put(cityActions.fetchCityListFailed(error.message));
  }
}

export default function* citySaga() {
  yield takeLatest(cityActions.fetchCityList.type, fetchCityList);
}
