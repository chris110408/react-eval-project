import React from 'react'
import { reduce, toPairs, compose, map, sort } from 'ramda'
import Pie from './pieChart'
import DonutPie from './DonutPie'
import BarChart from './BarChart'
import {
  calculateIssueRepoRatio,
  trimPieData,
  getPiedata,
  getEventsTypeKeys,
  getFinalObj
} from './fns'

import styled from 'styled-components'
import media from 'styled-media-query'
import { Card, Button, Icon, List, Row, Col } from 'antd'
import { COLOR_MAP } from '../../global'

export const ChartCardDiv = styled.div`
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.3);
  padding: 10px;
  margin-bottom: 10px;
  background: white;
  cursor: pointer;
  height: 400px;
  .title {
    margin: 10px;
  }
`

const DonutChartCardDiv = styled.div`
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.3);
  padding-bottom: 10px;
  background: white;
  cursor: pointer;
  .title {
    padding: 25px;
  }
`

const Analysis = ({ dispatch, user, repoData, eventData }) => {
  const ratioRepoData = calculateIssueRepoRatio(repoData)
  console.log(eventData)
  const prePieData = getPiedata(eventData)
  const pieData = trimPieData(prePieData, 8)
  const bardata = getFinalObj(eventData)
  const barKeys = getEventsTypeKeys(eventData)

  console.log(barKeys)

  return (
    <Row gutter={24}>
      <Col xl={6} lg={8} md={24} sm={24} xs={24}>
        <ChartCardDiv>
          <h2 className='title'>Repos issue ratio</h2>
          <Pie
            data={ratioRepoData}
            color={['type', [COLOR_MAP.error, COLOR_MAP.noIssue]]}
            text='Issue Ratio of Repo'
          />
        </ChartCardDiv>
      </Col>

      <Col xl={18} lg={16} md={24} sm={24} xs={24}>
        <ChartCardDiv>
          <h2 className='title'>Event Daily Status</h2>
          <BarChart data={bardata} fieldArray={barKeys} />
        </ChartCardDiv>
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <DonutChartCardDiv>
          <h1 className='title'>Events Ratio</h1>
          <DonutPie data={pieData} />
        </DonutChartCardDiv>
      </Col>
    </Row>
  )
}

export default Analysis
