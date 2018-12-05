import { connect } from 'react-redux'
import { compose } from 'redux'
import { withEventReducer, withRepoReducer } from './model/reducers'
import { withSaga } from './model/sagas'

import { UserInfoPage } from './UserInfo'
import {
  repoSelecter,
  eventSelecter,
  userSelecter,
} from './model/selectors'

const mapStateToProps = state => ({
  user: userSelecter(state),
  repoData: repoSelecter(state),
  eventData: eventSelecter(state)
})

const withConnect = connect(mapStateToProps)

export default compose(
  withSaga,
  withEventReducer,
  withRepoReducer,
  withConnect
)(UserInfoPage)
