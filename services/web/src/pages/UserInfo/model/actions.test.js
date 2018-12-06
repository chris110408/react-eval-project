/* eslint-disable */

import { fetchEventsAction, FETCH_EVENTS } from './actions'

describe('UserInfo Action test', () => {
  test('returns an action with type FETCH_EVENTS', () => {
    const action = fetchEventsAction()
    expect(action).toEqual({ type: FETCH_EVENTS })
  })
})
