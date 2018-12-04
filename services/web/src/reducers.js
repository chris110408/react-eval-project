/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import { USER_LOGGED_IN } from './pages/Login/model/actions'
import { SET_COLLAPSED, SET_ISMOBILE } from './layouts/model/actions'
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// The initial state of the App
const initialState = fromJS({
  userinfo: {
    login: '',
    avatar_url: 'na',
    name: 'na',
    bio: 'na',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0
  }
})

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return state
        .setIn(['userinfo', 'login'], action.payload.login)
        .setIn(['userinfo', 'avatar_url'], action.payload.avatar_url)
        .setIn(['userinfo', 'name'], action.payload.name)
        .setIn(['userinfo', 'bio'], action.payload.bio)
        .setIn(['userinfo', 'public_repos'], action.payload.public_repos)
        .setIn(['userinfo', 'followers'], action.payload.followers)
        .setIn(['userinfo', 'public_gists'], action.payload.public_gists)
        .setIn(['userinfo', 'following'], action.payload.following)

    default:
      return state
  }
}

const initialLayoutState = fromJS({
  collapsed: false,
  ismobile: false
})

const LayoutReducer = (state = initialLayoutState, action) => {
  switch (action.type) {
    case SET_COLLAPSED:
      return state
        .set('collapsed', action.payload.collapsed)
        .set('ismobile', action.payload.ismobile)
    case SET_ISMOBILE:
      return state.set('collapsed', action.payload.collapsed)
    default:
      return state
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer (injectedReducers) {
  return combineReducers({
    routerReducer,
    user: userReducer,
    layout: LayoutReducer,
    ...injectedReducers
  })
}
