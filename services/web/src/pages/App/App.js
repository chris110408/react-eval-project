/**
 * Created by leichen on 11/02/2018.
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import LoginPage from '../Login'
// import BasicLayout from "../../layouts/";

import { withSaga } from '../Login/model/sagas'

// const GuestRoute = withProps({ authority: USER_TYPE_GUEST })(AuthorizedRouter);
// const UserRoute = withProps({ authority: USER_TYPE_REG })(AuthorizedRouter);
// const ConfirmedRoute = withProps({ authority: USER_TYPE_CONFIRMED })(AuthorizedRouter);

const App = ({ dispatch, user }) => {
  return (
    <div>
      <Helmet titleTemplate='%s - John-David Dalton' defaultTitle='jdalton'>
        <meta name='description' content='Interview Project' />
      </Helmet>

      <Switch>
        <Route exact path='/' component={LoginPage} />
      </Switch>
    </div>
  )
}

export default withSaga(App)
