import React from 'react'
import { Card, Row, Col, Icon, Tooltip, Badge } from 'antd'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR_MAP } from '../../global'
import { clearFix } from '../../utils/clearfix_helper'

export const CardMetaDiv = styled.div`

  .title{
      font-size: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: black;
      font-weight: 500;
      margin-bottom:10px;
  }
  .des {
    color:${COLOR_MAP.textColorSecondary}
    text-overflow: ellipsis;
    margin: 10px 0 10px 0;
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }
`

const Repos = ({ repos }) => {
  console.log(repos)
  return (
    <div>
      <Card
        style={{ marginBottom: 24, marginTop: 10 }}
        title='All Repos'
        bordered={false}
      >
        <Row gutter={24}>
          {repos.map(item => (
            <Col key={shortid.generate()} xl={8} lg={8} md={12} sm={12} xs={24}>
              <Card
                className='repos'
                style={{
                  margin: '1px auto 4px auto',
                  boxShadow: '0px 1px 4px rgba(0,0,0,0.3)'
                }}
              >
                <CardMetaDiv>
                  <div className='title'>
                    <a href={item.htmlUrl}>{item.name}</a>
                  </div>
                  <div className='des'>{item.description}</div>
                </CardMetaDiv>

                <div>
                  <Row type='flex'>
                    <Col span={5}>
                      <Tooltip title={'Star: ' + item.stargazers_count}>
                        <Badge
                          count={item.stargazers_count}
                          style={{ backgroundColor: '#87d068' }}
                        >
                          <Icon type='star-o' />
                        </Badge>
                      </Tooltip>
                    </Col>

                    <Col span={5}>
                      <Tooltip title={'Fork: ' + item.forks}>
                        <Badge
                          count={item.forks}
                          style={{ backgroundColor: '#87d068' }}
                        >
                          <Icon type='link' />
                        </Badge>
                      </Tooltip>
                    </Col>

                    <Col span={5}>
                      <Tooltip title={'Code: ' + item.language}>
                        <Icon type='code' />
                      </Tooltip>
                    </Col>
                    <Col span={5}>
                      <Tooltip title={'Updated: ' + item.updatedAt}>
                        <Icon type='calendar' />
                      </Tooltip>
                    </Col>
                    <Col span={3} />

                    <Col span={1}>
                      <Tooltip title={'Issues: ' + item.open_issues}>
                        <Badge count={item.open_issues}>
                          <Icon type='notification' />
                        </Badge>
                      </Tooltip>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  )
}

Repos.propTypes = {
  repos: PropTypes.array
}

export { Repos }
