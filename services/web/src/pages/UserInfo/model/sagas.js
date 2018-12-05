/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import { createEventArray, createRepoArray, convertListToArray } from '../fns'

import {
  FETCH_EVENTS,
  FETCH_REPOS,
  updateReposAction,
  updateEventsAction
} from './actions'
import injectSaga from '../../../utils/injectSaga'
import { requestFetchRepos, requestFetchEvents } from '../../../service/api'
import { DAEMON } from '../../../utils/constants'

export function* fetchRepos(action) {
  const response = yield call(requestFetchRepos)

  if (response) {
    const data = yield call(createRepoArray, response)
    yield put(updateReposAction(data))
  }
  // else push to 404
}

export function* fetchEvents(action) {
  const response = yield call(requestFetchEvents)

  if (response) {
    const trimedData = yield call(createEventArray, response)
    yield put(updateEventsAction(trimedData))
  }
}

/**
 * Root saga manager
 */
export function* fetchReposWatcher() {
  yield takeLatest(FETCH_REPOS, fetchRepos)
}

export function* fetchEventsWatcher() {
  yield takeLatest(FETCH_EVENTS, fetchEvents)
}

export default function* root() {
  yield all([fork(fetchReposWatcher), fork(fetchEventsWatcher)])
}

export const withSaga = injectSaga({
  key: 'userInfo',
  saga: root,
  mode: DAEMON
})
