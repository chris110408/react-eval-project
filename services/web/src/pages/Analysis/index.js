import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAnalysisReducer } from './model/reducers'
import { withSaga } from './model/sagas'

import Analysis from './Analysis'
import {
  repoSelecter,
  eventSelecter,
  userSelecter,
  donutPieSelecter
} from './model/selectors'

const mapStateToProps = state => ({
  user: userSelecter(state),
  repoData: repoSelecter(state),
  eventData: eventSelecter(state),
  donutData: donutPieSelecter(state)
})

const withConnect = connect(mapStateToProps)

export default compose(
  withSaga,
  withAnalysisReducer,
  withConnect
)(Analysis)
