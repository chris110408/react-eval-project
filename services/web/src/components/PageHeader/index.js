import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const PageHeaderDiv = styled.div`
  background: white;
  padding: 16px 32px 0 32px;
  border-bottom: 1px, solid hsv(0, 0, 91%);
  display: flex;
  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

const PageHeader = ({ children, ...restProps }) => {
  return (
    <PageHeaderDiv>
      <div className='row'>{children}</div>
    </PageHeaderDiv>
  )
}

export default PageHeader
