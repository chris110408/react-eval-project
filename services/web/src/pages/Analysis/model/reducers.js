// The initial state of the App
import { UPDATE_DONUTPIE_DATA } from './actions'
import { fromJS } from 'immutable'
import injectReducer from '../../../utils/injectReducer'

export const initialAnalysisState = fromJS({
  donutdata: []
})

export const analysisReducer = (state = initialAnalysisState, action) => {
  switch (action.type) {
    case UPDATE_DONUTPIE_DATA:
      return state.set('donutdata', action.payload)
    default:
      return state
  }
}

export const withAnalysisReducer = injectReducer({
  key: 'analysis',
  reducer: analysisReducer
})
