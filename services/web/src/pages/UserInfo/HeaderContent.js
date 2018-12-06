import React from 'react'
import { Avatar, Tag, Row, Col } from 'antd'
import { HeaderContentDiv } from './styles'
import { map, trim, split, compose } from 'ramda'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const HeaderContent = ({ currentUser }) => {
  const name = currentUser.get('name')
  const bio = currentUser.get('bio')
  const avatarUrl = currentUser.get('avatar_url')
  // str->htmlTag
  const convertTextToTag = str => (
    <Tag key={shortid.generate()} className='biotag'>
      {str}
    </Tag>
  )
  // use bio array to create bio tag
  const bioLabels = bio
    ? compose(
      map(convertTextToTag),
      map(trim)
    )(split('•', bio))
    : []
  return (
    <HeaderContentDiv>
      <div className='avatar'>
        <Avatar
          size='large'
          // avatar
          src={avatarUrl}
        />
      </div>
      <div className='content'>
        <div className='contentTitle'><span>Greeting! </span>{name}</div>
        <div className='bioLabel'>{bioLabels}</div>
      </div>
    </HeaderContentDiv>
  )
}

HeaderContent.propTypes = {
  currentUser: PropTypes.object
}

export { HeaderContent }
