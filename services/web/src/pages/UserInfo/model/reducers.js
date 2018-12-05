// The initial state of the App
import { UPDATE_REPOS, UPDATE_EVENTS } from './actions'
import { fromJS } from 'immutable'
import injectReducer from '../../../utils/injectReducer'

export const initialRepoState = fromJS({
  data: [],
})

export const repoReducer = (state = initialRepoState, action) => {
  switch (action.type) {
    case UPDATE_REPOS:
      return state.set('data', action.payload)
    default:
      return state
  }
}

export const initialEventState = fromJS({
  data: []
})

export const eventReducer = (state = initialEventState, action) => {
  switch (action.type) {
    case UPDATE_EVENTS:
      return state
        .set('data', action.payload)
    default:
      return state
  }
}

export const withRepoReducer = injectReducer({
  key: 'repo',
  reducer: repoReducer
})

export const withEventReducer = injectReducer({
  key: 'event',
  reducer: eventReducer
})
