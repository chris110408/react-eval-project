/* eslint-disable */

import {
  fetchReposAction,
  fetchEventsAction,
  FETCH_EVENTS,
  FETCH_REPOS,
  updateReposAction,
  updateEventsAction
} from './actions'

describe('UserInfo Action test', () => {
  test('returns an action with type FETCH_EVENTS', () => {
    const action = fetchEventsAction()
    expect(action).toEqual({ type: FETCH_EVENTS })
  })
})
