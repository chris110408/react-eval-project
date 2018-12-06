import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { SCREEN_SIZE_MAP } from '../../global'

const PageHeaderDiv = styled.div`
  background: white;
  padding: 16px 32px 10px 32px;

  border-bottom: 1px, solid hsv(0, 0, 91%);
  display: flex;

  // ${media.greaterThan(SCREEN_SIZE_MAP.screenXl)`
  //  padding-bottom:0;
  // `}
`
// eslint-disable-next-line
const PageHeader = ({ children, ...restProps }) => {
  return <PageHeaderDiv>{children}</PageHeaderDiv>
}

export default PageHeader
