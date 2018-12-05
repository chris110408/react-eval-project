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
// import { createEventArray } from './fns'

import {
  reduce,
  map,
  sort,
  split,
  compose,
  last,
  uniqWith,
  eqBy,
  toPairs
} from 'ramda'
// import shortid from 'shortid'

import { createEventArray } from './fns/'

export const UserInfo = ({ dispatch, user, repoData, eventData }) => {
  const createSingleDateEvent = (acc, item) => {
    const key = item.created_at
    const _type = item.type

    if (acc[`${key}`]) {
      if (acc[`${key}`][[`${_type}`]]) {
        acc[`${key}`][[`${_type}`]] = acc[`${key}`][[`${_type}`]] + 1
      } else {
        acc[`${key}`][[`${_type}`]] = 1
      }
      return acc
    }
    let initObj = {}
    initObj[`${_type}`] = 1
    acc[`${key}`] = Object.assign({}, initObj)
    return acc
  }
  const convertArrayItemToObj = xs => {
    return Object.assign({}, { date: xs[0] }, xs[1])
  }

  const finalObj = compose(
    map(convertArrayItemToObj),
    toPairs,
    reduce(createSingleDateEvent, {})
  )

  console.log(finalObj(eventData))

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

export const UserInfoPage = lifecycle({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchReposAction())
    dispatch(fetchEventsAction())
  }
})(UserInfo)
