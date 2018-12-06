import React from 'react'
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  Guide
} from 'bizcharts'
import DataSet from '@antv/data-set'
import PropTypes from 'prop-types'

class DonutPie extends React.Component {
  render () {
    const { DataView } = DataSet
    const { Html } = Guide
    const { data } = this.props
    const dv = new DataView()
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    })
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + '%'
          return val
        }
      }
    }
    return (
      <div>
        <Chart
          height={window.innerHeight}
          data={dv}
          scale={cols}
          padding={[200, 120, 20, 160]}
          forceFit
        >
          <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
          <Axis name='percent' />
          <Legend
            position='right'
            offsetY={-window.innerHeight / 2 - 150}
            offsetX={-200}
          />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Guide>
            <Html
              position={['50%', '50%']}
              html='<div style="color:#8c8c8c;font-size:2.5em;text-align: center;width: 10em;">Total Events<br><span style="color:#262626;font-size:1.16em">100</span></div>'
              alignX='middle'
              alignY='middle'
            />
          </Guide>
          <Geom
            type='intervalStack'
            position='percent'
            color='item'
            tooltip={[
              'item*percent',
              (item, percent) => {
                percent = percent * 100 + '%'
                return {
                  name: item,
                  value: percent
                }
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff'
            }}
          >
            <Label
              content='percent'
              formatter={(val, item) => {
                const point = item.point
                let percent = point['percent']
                percent = (percent * 100).toFixed(2) + '%'
                return percent
              }}
            />
          </Geom>
        </Chart>
      </div>
    )
  }
}

DonutPie.propTypes = {
  data: PropTypes.array
}

export default DonutPie
