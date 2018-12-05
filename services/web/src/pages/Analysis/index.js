import { connect } from 'react-redux'
import { compose } from 'redux'
// import { withEventReducer, withRepoReducer } from './model/reducers'
// import { withSaga } from './model/sagas'

import Analysis from './Analysis'
import { repoSelecter, eventSelecter, userSelecter } from './model/selectors'

const mapStateToProps = state => ({
  user: userSelecter(state),
  repoData: repoSelecter(state),
  eventData: eventSelecter(state)
})

const withConnect = connect(mapStateToProps)

export default compose(
  withConnect
)(Analysis)
