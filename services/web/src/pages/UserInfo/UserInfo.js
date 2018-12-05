import React from 'react'
import { Card, Button, Icon, List, Row, Col } from 'antd'
import { HeaderContent } from './HeaderContent'
import { ExtraContent } from './ExtraContent'
import { Repos } from './Repos'
import { Events } from './Events'
import PageHeader from '../../components/PageHeader'
import { MainPageDiv } from './styles'
import { lifecycle } from 'recompose'
import { fetchReposAction, fetchEventsAction } from './model/actions'
import { map, sort, split, compose, last, uniqWith, eqBy } from 'ramda'
// import shortid from 'shortid'

import { createEventArray, createRepoArray } from './fns/'

import { TagCloud, ChartCard, WaterWave } from 'ant-design-pro/lib/Charts'

export const UserInfo = ({ dispatch, user, repo_data, event_data }) => {
  const byType = obj => {
    return obj.type
  }
  const typeEq = eqBy(byType)
  // type created_at repo:name("npm/npm") repo:url

  console.log(uniqWith(typeEq)(event_data))

  const tags = []
  for (let i = 0; i < 50; i += 1) {
    tags.push({
      name: `TagClout-Title-${i}`,
      value: Math.floor(Math.random() * 50) + 20
    })
  }

  console.log(tags);
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
          <Repos repos={createRepoArray(repo_data)} />
          <Events events={createEventArray(event_data)} />
        </Col>
      </Row>
    </MainPageDiv>
  )
}

export const UserInfoPage = lifecycle({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchReposAction())
    dispatch(fetchEventsAction())
  }
})(UserInfo)
