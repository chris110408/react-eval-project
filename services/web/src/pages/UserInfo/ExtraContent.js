import React from 'react'
import { ExtraContentDiv } from './styles'
import PropTypes from 'prop-types'
import { Col } from 'antd'

const ExtraContent = ({ currentUser }) => {
  const publicRepos = currentUser.get('public_repos')
  const publicGists = currentUser.get('public_gists')
  const followers = currentUser.get('followers')
  const following = currentUser.get('following')

  return (
    <ExtraContentDiv>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className='extraContent'>
          <div className='statItem'>
            <p>Repos</p>
            <p>{publicRepos}</p>
          </div>

          <div className='statItem'>
            <p>Gits</p>
            <p>{publicGists}</p>
          </div>

          <div className='statItem'>
            <p>Following/Follower</p>
            <p>
              {following}
              <span> / {followers}</span>
            </p>
          </div>
        </div>
      </Col>
    </ExtraContentDiv>
  )
}

ExtraContent.propTypes = {
  currentUser: PropTypes.object
}

export { ExtraContent }
