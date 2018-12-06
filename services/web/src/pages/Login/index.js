import { connect } from 'react-redux'
import { compose } from 'redux'

import { userSelecter } from './model/selectors'

import { WrappedNormalLoginForm } from './Login'

const mapStateToProps = state => ({ user: userSelecter })

const withConnect = connect(mapStateToProps)

export default compose(withConnect)(WrappedNormalLoginForm)
