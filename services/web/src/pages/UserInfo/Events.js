import React from 'react'
import { Card, Table } from 'antd'
import { convertListToArray } from './fns'
import PropTypes from 'prop-types'

const Events = ({ events, load }) => {
  const columns = [
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Repo Name',
      dataIndex: 'repo_name',
      key: 'repo_name'
    },
    {
      title: 'Repo API',
      dataIndex: 'repo_url',
      render: url => <a href={url}>link</a>
    },
    {
      title: 'Created',
      dataIndex: 'diffToday',
      render: days => <p>{days} days ago</p>
    }
  ]

  return (
    <div>
      <Card style={{ marginBottom: 24, marginTop: 10 }} bordered={false}>
        <h2>All Events</h2>
        {/* check immutable list is empty or not if is not empty render */}
        {Object.keys(events)[0] !== 'size' && (
          <Table
            style={{ marginBottom: 24, marginTop: 10 }}
            columns={columns}
            dataSource={convertListToArray(events)}
          />
        )}
      </Card>
    </div>
  )
}

Events.propTypes = {
  events: PropTypes.any.isRequired,
  load: PropTypes.bool
}

export { Events }
