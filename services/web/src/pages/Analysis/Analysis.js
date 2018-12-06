import React from 'react'
import Pie from '../../components/chart/pieChart'
import DonutPie from '../../components/chart/DonutPie'
import BarChart from '../../components/chart/BarChart'
import {
  calculateIssueRepoRatio,
  getEventsTypeKeys,
  getFinalObj
} from './fns'
import { fetchDonutPieData, changeDonutPieData } from './model/actions'

import styled from 'styled-components'
import { Row, Col, Slider } from 'antd'
import { COLOR_MAP } from '../../global'
import PropTypes from 'prop-types'
import { lifecycle } from 'recompose'

export const ChartCardDiv = styled.div`
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.3);
  padding: 10px;
  margin-bottom: 10px;
  background: white;
  height: 400px;
  transition: transform 0.3s;
  .title {
    margin: 10px;
  }
  &:hover {
    transform: translateY(-0.3rem) scale(1.02);
  }
`

const SliderContainerDiv = styled.div`
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.3);
  padding-bottom: 10px;
  background: white;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-0.3rem) scale(1.02);
  }
`

const DonutChartCardDiv = styled.div`
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.3);
  padding: 10px 100px;
  background: white;
  .title {
    padding: 25px;
  }
`

const Analysis = ({ dispatch, user, repoData, eventData, donutData }) => {
  const ratioRepoData = calculateIssueRepoRatio(repoData)
  const bardata = getFinalObj(eventData)
  const barKeys = getEventsTypeKeys(eventData)

  const onAfterChange = value => {
    dispatch(changeDonutPieData({ eventData, num: value }))
  }

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
        {Object.keys(donutData)[0] !== 'size' && (
          <DonutChartCardDiv>
            <h1 className='title'>Top 10 Events Ratio: Please use the slider below to change the number of events you want to see </h1>
            <SliderContainerDiv>
              <Slider
                onAfterChange={onAfterChange}
                defaultValue={30}
                max={barKeys.length}
                min={1}
                tooltipVisible
              />
            </SliderContainerDiv>
            <DonutPie data={donutData} />
          </DonutChartCardDiv>
        )}
      </Col>
    </Row>
  )
}

Analysis.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  repoData: PropTypes.array,
  eventData: PropTypes.array,
  donutData: PropTypes.any.isRequired
}

export const AnalysisPage = lifecycle({
  componentDidMount () {
    const { dispatch, eventData } = this.props
    dispatch(fetchDonutPieData({ eventData }))
  }
})(Analysis)
export default AnalysisPage
