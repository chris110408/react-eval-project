import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const { Sider } = Layout
const { SubMenu } = Menu

const DivLogo = styled.div`
  height: 38px;
  background-color: #ffffff;
  margin: 16px;
  margin-top: 10px;
  text-align: center;

  .logo {
    width: 100%;
    height: auto;
    magin: auto;
  }
`

const StyledSider = styled(Sider)`
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;
`

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
const getIcon = icon => {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return <img src={icon} alt='icon' className='icon' />
  }
  if (typeof icon === 'string') {
    return <Icon type={icon} />
  }
  return icon
}

export const SiderMenu = ({
  collapsed,
  onCollapse,
  isMobile,
  location,
  menuData
}) => {
  const conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/')
    }
  }

  /**
   *
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */
  const getMenuItemPath = item => {
    const itemPath = conversionPath(item.path)
    const icon = getIcon(item.icon)
    const { name } = item
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath}>
          {icon}
          <span>{name}</span>
        </a>
      )
    }
    return (
      <Link
        to={itemPath}
        replace={itemPath === location.pathname}
        onClick={
          isMobile
            ? () => {
              onCollapse(true)
            }
            : undefined
        }
      >
        {icon}
        <span>{name}</span>
      </Link>
    )
  }

  /**
   * get SubMenu or Item
   */
  const getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = getNavMenuItems(item.children)
      // Do not show SubMenu if there is no childeren ITEM
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {getIcon(item.icon)}
                  <span>{item.name}</span>
                </span>
              ) : (
                item.name
              )
            }
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        )
      }
      return null
    } else {
      return <Menu.Item key={item.path}>{getMenuItemPath(item)}</Menu.Item>
    }
  }

  const getNavMenuItems = menusData => {
    if (!menusData) {
      return []
    }
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => {
        // make dom
        const ItemDom = getSubMenuOrItem(item)
        return ItemDom
      })
      .filter(item => item)
  }

  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint='lg'
      onCollapse={onCollapse}
      width={256}
    >
      <DivLogo>
        <a href='https://www.clearcapital.com'>
          <img
            className='logo'
            src='https://www.clearcapital.com/wp-content/uploads/2017/08/Clear-Capital-Logo.png'
            alt='logo'
          />
        </a>
      </DivLogo>
      <Menu
        key='Menu'
        theme='dark'
        mode='inline'
        style={{ padding: '16px 0', width: '100%' }}
      >
        {getNavMenuItems(menuData)}
      </Menu>
    </StyledSider>
  )
}

SiderMenu.propTypes = {
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
  isMobile: PropTypes.bool,
  location: PropTypes.object,
  menuData: PropTypes.array
}
