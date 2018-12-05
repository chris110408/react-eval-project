import React from 'react'
import { Card, Table } from 'antd'
import PropTypes from 'prop-types'

const Events = ({ events }) => {
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
        <Table
          style={{ marginBottom: 24, marginTop: 10 }}
          columns={columns}
          dataSource={events}
        />
      </Card>
    </div>
  )
}

Events.propTypes = {
  events: PropTypes.array
}

export { Events }
