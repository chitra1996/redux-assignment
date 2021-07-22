import { takeEvery, put, delay, takeLatest } from 'redux-saga/effects'

function* countUpAsync() {
    yield delay(4000)
    yield put({type: "INCREMENT_ASYNC", value: ""})
}

export function* watchCountUp () {
    yield takeLatest('INCREMENT', countUpAsync);
}

// export function* watchCountUpAlt () {
//     yield takeEvery('INCREMENT', countUpAsync)
// }

// ASYNC API CALL
// RETURN RESULT
// STORE UPDATE USING DISPATCH


// DISPATCH EVENT
// API CALL FOR THAT PARTICULAR EVENT
// RESULT
// ACTION DISPATCH FOR ASYNC CALL
// STORE UDPATE