import React from 'react'
import { Menu, Icon, Spin, Dropdown, Avatar } from 'antd'
import styled from 'styled-components'
import PageHeader from '../PageHeader'
import PropTypes from 'prop-types'
import { ExtraContent } from '../../pages/UserInfo/ExtraContent'

const DivRight = styled.div`
  padding: 0 1rem;
  float: right;
  height: 100%;
  .action {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    > i {
      font-size: 16px;
      vertical-align: middle;
      // color: @text-color;
    }
    &:hover,
    &:global(.ant-popover-open) {
      background: black;
    }
  }
  .search {
    padding: 0;
    margin: 0 12px;
    &:hover {
      background: transparent;
    }
  }
  .account {
    .avatar {
      margin: 20px 20px 20px 0;
      color: black;
      background: rgba(255, 255, 255, 0.85);
      vertical-align: middle;
    }
  }
`

const StyledIconTrigger = styled(Icon)`
  font-size: 20px;
  line-height: 64px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  padding: 0 24px;
  &:hover {
    // background: @primary-1;
  }
`

// bool
// eslint-disable-next-line
const GlobalHeader = ({
  collapsed,
  onCollapse,
  onHeadMenuClick,
  currentUser
}) => {
  const menu = (
    <Menu selectedKeys={[]} onClick={onHeadMenuClick}>
      <Menu.Item>
        <Icon type='user' />
        User Info
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item disabled>
        <Icon type='logout' />
        Logout
      </Menu.Item>
    </Menu>
  )

  const currentUserLogin = currentUser.get('login')
  const currentUserAvatar = currentUser.get('avatar_url')

  return (
    <div>
      <StyledIconTrigger
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onCollapse}
      />
      <DivRight>
        {currentUserLogin ? (
          <Dropdown overlay={menu}>
            <span className='action account'>
              <Avatar size='small' className='avatar' src={currentUserAvatar} />
              <span className='name'>Hello {currentUserLogin}</span>
            </span>
          </Dropdown>
        ) : (
          <Spin size='small' style={{ marginLeft: 8 }} />
        )}
      </DivRight>
    </div>
  )
}

GlobalHeader.propTypes = {
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
  onHeadMenuClick: PropTypes.func,
  currentUser: PropTypes.object
}

export default GlobalHeader
