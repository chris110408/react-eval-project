import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import { trimPieData, getPiedata, getEventsTypeKeys } from '../fns'

import {
  FETCH_DONUTPIE_DATA,
  CHANGE_DONUTPIE_DATA,
  updateDonutPieData
} from './actions'

import injectSaga from '../../../utils/injectSaga'

import { DAEMON } from '../../../utils/constants'

export function * changeData (action) {
  const rawData = yield call(getPiedata, action.payload.eventData)
  const trimedData = yield call(
    trimPieData,
    rawData,
    action.payload.num
  )
  yield put(updateDonutPieData(trimedData))
}

export function * fetchData (action) {
  const rawData = yield call(getPiedata, action.payload.eventData)
  const keys = yield call(getEventsTypeKeys, action.payload.eventData)
  const trimedData = yield call(
    trimPieData,
    rawData,
    keys.length < 11 ? keys.length : 10
  )
  yield put(updateDonutPieData(trimedData))
}

/**
 * Root saga manager
 */
export function * fetchDonutDataWatcher () {
  yield takeLatest(FETCH_DONUTPIE_DATA, fetchData)
}

export function * changeDonutDataWatcher () {
  yield takeLatest(CHANGE_DONUTPIE_DATA, changeData)
}

export default function * root () {
  yield all([fork(fetchDonutDataWatcher), fork(changeDonutDataWatcher)])
}

export const withSaga = injectSaga({
  key: 'analysis',
  saga: root,
  mode: DAEMON
})
