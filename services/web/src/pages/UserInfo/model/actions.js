export const FETCH_REPOS = 'FETCH_REPOS'
export const FETCH_EVENTS = 'FETCH_EVENTS'

export const UPDATE_REPOS = 'UPDATE_REPOS'
export const UPDATE_EVENTS = 'UPDATE_EVENTS'

export const fetchReposAction = () => {
  return { type: FETCH_REPOS }
}

export const fetchEventsAction = () => {
  return { type: FETCH_EVENTS }
}

export const updateReposAction = values => {
  return { type: UPDATE_REPOS, payload: values }
}

export const updateEventsAction = values => {
  return { type: UPDATE_EVENTS, payload: values }
}
