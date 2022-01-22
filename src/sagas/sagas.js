import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { BURGER_DATA_REQUEST, BURGER_DATA_SUCCESS, BURGER_DATA_ERROR } from '../services/actions/burger-ingredients';

import Api from '../utils/Api';


const getData = () => Api.getBurgerIngredientsData();


export function* getIngredientsWorker() {
    try {
        const { data } = yield call(getData);
        console.log(data)
        yield put({ type: BURGER_DATA_SUCCESS, data: data })

    } catch (error) {
        yield put({ type: BURGER_DATA_ERROR })
    }
}

export function* getIngredientWatcher() {
    yield takeEvery(BURGER_DATA_REQUEST, getIngredientsWorker);
}
