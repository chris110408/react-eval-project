import React from 'react'
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from 'bizcharts'
import DataSet from '@antv/data-set'

class Stacked extends React.Component {
  render() {
    const { data, fieldArray } = this.props

    const ds = new DataSet()
    const dv = ds.createView().source(data)
    dv.transform({
      type: 'fold',
      fields: fieldArray,
      // 展开字段集
      key: 'Date',
      // key字段
      value: 'Event',
      // value字段
      retains: ['date'] // 保留字段集，默认为除fields以外的所有字段
    })
    return (
      <div>
        <Chart height={300} data={dv} padding={'auto'} forceFit>
          <Legend />
          <Coord transpose />
          <Axis
            name='Date'
            label={{
              offset: 12
            }}
          />
          <Axis name='Event' />
          <Tooltip />
          <Geom type='intervalStack' position='date*Event' color={'Date'} />
        </Chart>
      </div>
    )
  }
}

export default Stacked
