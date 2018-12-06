import React from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts'
import DataSet from '@antv/data-set'
import PropTypes from 'prop-types'

class Stacked extends React.Component {
  render () {
    const { data, fieldArray } = this.props
    const ds = new DataSet()
    const dv = ds.createView().source(data)
    dv.transform({
      type: 'fold',
      fields: fieldArray,
      key: 'Date',
      value: 'Event',
      // value字段
      retains: ['date']
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

Stacked.propTypes = {
  data: PropTypes.array,
  fieldArray: PropTypes.array
}

export default Stacked
