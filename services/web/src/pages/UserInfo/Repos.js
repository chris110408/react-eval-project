import React from 'react'
import { Card, Row, Col, Icon, Tooltip, Badge } from 'antd'
import shortid from 'shortid'
import styled from 'styled-components'
import { COLOR_MAP } from '../../global'
import PropTypes from 'prop-types'

const CardContainerDiv = styled.div`
  margin: '1px auto 4px auto',
  boxShadow: '0px 1px 4px rgba(0,0,0,0.3)'
  transition: transform .3s;
  &:hover {
        transform: translateY(-1px) scale(1.01);
   }
`

const IconContainer = styled.div`
  cursor:pointer 
  &:hover {
    transform: translateY(-1px);
  }
`

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
// eslint-disable-next-line
const Repos = ({ repos, load }) => {
  return (
    <div>
      <Card
        style={{ marginBottom: 24, marginTop: 10 }}
        title='All Repos'
        bordered={false}
        loading={load}
      >
        <Row gutter={24}>
          {repos.map(item => (
            <Col key={shortid.generate()} xl={8} lg={8} md={12} sm={12} xs={24}>
              <CardContainerDiv>
                <Card
                  loading={load}
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
                        <IconContainer>
                          <Tooltip title={'Star: ' + item.stargazers_count}>
                            <Badge
                              count={item.stargazers_count}
                              style={{ backgroundColor: '#87d068' }}
                            >
                              <Icon type='star-o' />
                            </Badge>
                          </Tooltip>
                        </IconContainer>
                      </Col>

                      <Col span={5}>
                        <IconContainer>
                          <Tooltip title={'Fork: ' + item.forks}>
                            <Badge
                              count={item.forks}
                              style={{ backgroundColor: '#87d068' }}
                            >
                              <Icon type='link' />
                            </Badge>
                          </Tooltip>
                        </IconContainer>
                      </Col>

                      <Col span={5}>
                        <IconContainer>
                          <Tooltip title={'Code: ' + item.language}>
                            <Icon type='code' />
                          </Tooltip>
                        </IconContainer>
                      </Col>
                      <Col span={5}>
                        <IconContainer>
                          <Tooltip title={'Updated: ' + item.updatedAt}>
                            <Icon type='calendar' />
                          </Tooltip>
                        </IconContainer>
                      </Col>
                      <Col span={3} />

                      <Col span={1}>
                        <IconContainer>
                          <Tooltip title={'Issues: ' + item.open_issues}>
                            <Badge count={item.open_issues}>
                              <Icon type='notification' />
                            </Badge>
                          </Tooltip>
                        </IconContainer>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </CardContainerDiv>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  )
}

Repos.propTypes = {
  repos: PropTypes.any.isRequired,
  load: PropTypes.bool
}

export { Repos }
