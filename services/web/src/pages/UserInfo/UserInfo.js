import React from 'react'
import { Row, Col } from 'antd'
import { HeaderContent } from './HeaderContent'
import { ExtraContent } from './ExtraContent'
import { Repos } from './Repos'
import { Events } from './Events'
import PageHeader from '../../components/PageHeader'
import { MainPageDiv } from './styles'
import { lifecycle } from 'recompose'
import { fetchReposAction, fetchEventsAction } from './model/actions'
import PropTypes from 'prop-types'

export const UserInfo = ({ dispatch, user, repoData, eventData }) => {
  return (
    <MainPageDiv>
      <PageHeader>
        <Row gutter={24} className='header-row'>
          <Col xl={18} lg={24} md={24} sm={24} xs={24}>
            <HeaderContent currentUser={user} />
          </Col>
          <Col xl={2} lg={24} md={24} sm={24} xs={24} />
          <Col xl={4} lg={24} md={24} sm={24} xs={24}>
            <ExtraContent currentUser={user} />
          </Col>
        </Row>
      </PageHeader>
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Repos repos={repoData} />
          <Events events={eventData} />
        </Col>
      </Row>
    </MainPageDiv>
  )
}

UserInfo.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  repoData: PropTypes.any.isRequired,
  eventData: PropTypes.any.isRequired
}

export const UserInfoPage = lifecycle({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchReposAction())
    dispatch(fetchEventsAction())
  }
})(UserInfo)
