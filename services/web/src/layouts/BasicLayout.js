import React from 'react'
import { Layout } from 'antd'
import { ContainerQuery } from 'react-container-query'
import classNames from 'classnames'
import SiderMenu from '../components/SiderMenu'
import { getMenuData } from '../data/MenuData'
import GlobalHeader from '../components/Header'
import { initLogout } from '../pages/Login/model/actions'

const { Header, Content, Footer } = Layout

const query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200
  }
}

export const BasicLayout = ({
  dispatch,
  match,
  location,
  layoutObj,
  setIsMobile,
  setCollapsed,
  currentUser,
  children
}) => {
  const { collapsed, isMobile } = layoutObj
  const toggle = () => {
    setCollapsed({ collapsed: !collapsed })
  }
  const handleMenuCollapse = collapsed => {
    setCollapsed({ collapsed: collapsed })
  }
  const onHeadMenuClick = ({ key }) => {
    if (key === 'logout') {
      dispatch(initLogout())
    }
  }
  const layout = (
    <Layout>
      <SiderMenu
        logo='https://www.clearcapital.com/wp-content/uploads/2017/08/Clear-Capital-Logo.png'
        menuData={getMenuData()}
        collapsed={collapsed}
        location={location}
        isMobile={isMobile}
        onCollapse={handleMenuCollapse}
      />

      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <GlobalHeader
            currentUser={currentUser}
            collapsed={collapsed}
            isMobile={isMobile}
            onCollapse={toggle}
            onHeadMenuClick={onHeadMenuClick}
          />
        </Header>
        <Content style={{ margin: '24px 24px 0', height: '100%' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Create By Chris For Interview
        </Footer>
      </Layout>
    </Layout>
  )

  return (
    <div>
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    </div>
  )
}
