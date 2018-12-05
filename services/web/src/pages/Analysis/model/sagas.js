// /**
//  * Gets the repositories of the user from Github
//  */
//
// import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
// import {
//   FETCH_EVENTS,
//   FETCH_REPOS,
//   updateReposAction,
//   updateEventsAction
// } from './actions'
// import injectSaga from '../../../utils/injectSaga'
// import { requestFetchRepos, requestFetchEvents } from '../../../service/api'
// import { DAEMON } from '../../../utils/constants'
//
// export function* fetchRepos(action) {
//   const response = yield call(requestFetchRepos)
//
//   if (response) {
//     yield put(updateReposAction(response))
//   }
//   // else push to 404
// }
//
// export function* fetchEvents(action) {
//   const response = yield call(requestFetchEvents)
//
//   if (response) {
//     yield put(updateEventsAction(response))
//   }
//
// }
//
// /**
//  * Root saga manager
//  */
// export function* fetchReposWatcher() {
//   yield takeLatest(FETCH_REPOS, fetchRepos)
// }
//
// export function* fetchEventsWatcher() {
//   yield takeLatest(FETCH_EVENTS, fetchEvents)
// }
//
// export default function* root() {
//   yield all([fork(fetchReposWatcher), fork(fetchEventsWatcher)])
// }
//
// export const withSaga = injectSaga({
//   key: 'userInfo',
//   saga: root,
//   mode: DAEMON
// })
